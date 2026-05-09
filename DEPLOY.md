# Deploy: GitHub Pages (frontend) + Cloud Run (backend)

Este guia cobre hospedar o **Angular** em **GitHub Pages** e o **Spring Boot** no **Google Cloud Run**, com PostgreSQL gerenciado (por exemplo [Neon](https://neon.tech/), Cloud SQL ou outro host acessível pela internet).

## Visão geral

1. Criar um banco PostgreSQL e aplicar as migrações Flyway (ou deixar o backend aplicar no primeiro deploy).
2. Subir o backend no Cloud Run (imagem Docker + variáveis de ambiente).
3. Configurar **CORS** no backend com a origem do GitHub Pages (`https://SEU_USUARIO.github.io`).
4. Definir o secret **`API_BASE_URL`** no GitHub com a URL do Cloud Run e habilitar **Pages** na branch **`gh-pages`**.

O header HTTP **`Origin`** não inclui o caminho do repositório: para um site de projeto em `https://user.github.io/repo/`, o origin continua sendo **`https://user.github.io`**. Inclua também `http://localhost:4200` se quiser desenvolvimento local contra a API na nuvem.

---

## 1. Backend — build da imagem

Na raiz do monorepo, com contexto na pasta `backend/`:

```bash
docker build -t REGION-docker.pkg.dev/PROJECT_ID/REPO/backend:latest backend
```

Substitua `REGION`, `PROJECT_ID` e `REPO` pelo seu Artifact Registry (ou use `gcr.io` / Docker Hub conforme sua conta).

### Artifact Registry (exemplo rápido)

```bash
gcloud auth login
gcloud config set project PROJECT_ID

gcloud services enable artifactregistry.googleapis.com run.googleapis.com

gcloud artifacts repositories create REPO_NAME \
  --repository-format=docker \
  --location=REGION \
  --description="Backend images"

gcloud auth configure-docker REGION-docker.pkg.dev

docker build -t REGION-docker.pkg.dev/PROJECT_ID/REPO_NAME/backend:latest backend
docker push REGION-docker.pkg.dev/PROJECT_ID/REPO_NAME/backend:latest
```

---

## 2. Backend — Cloud Run

### Variáveis obrigatórias (perfil `prod`)

| Variável | Descrição |
|----------|-----------|
| `SPRING_PROFILES_ACTIVE` | `prod` |
| `SPRING_DATASOURCE_URL` | JDBC PostgreSQL (ex.: `jdbc:postgresql://HOST:5432/DB?sslmode=require`) |
| `SPRING_DATASOURCE_USERNAME` | usuário do banco |
| `SPRING_DATASOURCE_PASSWORD` | senha |
| `JWT_HMAC_SECRET` | segredo forte (vários caracteres); **mesmo valor** sempre que você precisar que tokens antigos continuem válidos |
| `APP_CORS_ALLOWED_ORIGINS` | origens separadas por vírgula, ex.: `https://user.github.io,http://localhost:4200` |

Opcionais: `JWT_ISSUER`, `JWT_ACCESS_TOKEN_MINUTES`, `JWT_REFRESH_TOKEN_DAYS`.

### Deploy

```bash
gcloud run deploy SERVICE_NAME \
  --image REGION-docker.pkg.dev/PROJECT_ID/REPO_NAME/backend:latest \
  --region REGION \
  --platform managed \
  --allow-unauthenticated \
  --set-env-vars "SPRING_PROFILES_ACTIVE=prod,\
SPRING_DATASOURCE_URL=jdbc:postgresql://...,\
SPRING_DATASOURCE_USERNAME=...,\
SPRING_DATASOURCE_PASSWORD=...,\
JWT_HMAC_SECRET=...,\
APP_CORS_ALLOWED_ORIGINS=https://USER.github.io,http://localhost:4200"
```

O Cloud Run injeta **`PORT`**; o app já usa `server.port=${PORT:8080}`.

Copie a URL do serviço (termina em `.run.app`): será o **`API_BASE_URL`** do frontend.

### Primeiro usuário administrador

O seed automático (`DevSeedConfig`) só roda com perfil **`dev`**. Em produção, crie o primeiro admin direto no PostgreSQL (hash BCrypt compatível com Spring — costuma ser rounds 10) ou rode **uma vez** contra o mesmo banco em máquina local com perfil `dev` só para criar o usuário e depois volte o deploy para `prod` apenas no Cloud Run.

Exemplo de SQL (gere o `password_hash` com uma ferramenta BCrypt para a senha desejada):

```sql
INSERT INTO users (id, email, password_hash, enabled, created_at, updated_at)
VALUES (gen_random_uuid(), 'admin@example.com', 'HASH_BCRYPT_AQUI', true, now(), now());

INSERT INTO user_roles (user_id, role)
SELECT id, 'ROLE_ADMIN' FROM users WHERE email = 'admin@example.com';
```

---

## 3. Frontend — GitHub Actions + Pages

### Secret no repositório

- **`API_BASE_URL`**: URL do Cloud Run **sem** barra no final, ex.: `https://backend-xxxxx-uc.a.run.app`

### Variável opcional (site de usuário)

Se o repositório for **`USERNAME.github.io`** (site na raiz `https://USERNAME.github.io/`), defina uma variável de repositório:

- **`GH_PAGES_BASE_HREF`** = `/`

(Repositórios normais usam automaticamente `/NOME_DO_REPO/`.)

### Habilitar Pages

1. Repositório → **Settings** → **Pages**.
2. **Build and deployment** → Source: **Deploy from a branch**.
3. Branch **`gh-pages`**, pasta **`/ (root)`**.

O workflow `.github/workflows/deploy-frontend.yml` faz push nessa branch quando há alterações em `frontend/` na branch **`main`**.

### Build manual (sem Actions)

```bash
cd frontend
npm ci
# Troque a URL e o base-href conforme seu repo / Cloud Run:
sed -i '' "s#__API_BASE_URL_PLACEHOLDER__#https://SEU-SERVICO.run.app#g" src/environments/environment.prod.ts   # macOS
# Linux: sed -i "s#__API_BASE_URL_PLACEHOLDER__#https://...#g" ...

npm run build -- --configuration production --base-href "/NOME_DO_REPO/"
cp dist/frontend/browser/index.html dist/frontend/browser/404.html
```

Publique o conteúdo de `dist/frontend/browser/` na branch `gh-pages` (por exemplo com `git subtree` ou o mesmo action localmente).

---

## 4. HTTPS e cookies

O frontend em GitHub Pages é **HTTPS**. A URL da API deve ser **HTTPS** (Cloud Run já fornece). Evite misturar `http://` na API em produção para não gerar conteúdo misto bloqueado pelo navegador.

---

## 5. Checklist rápido

- [ ] PostgreSQL acessível a partir do Cloud Run (Neon/Cloud SQL/firewall).
- [ ] `JWT_HMAC_SECRET` forte e estável em produção.
- [ ] `APP_CORS_ALLOWED_ORIGINS` inclui `https://USER.github.io` e, se útil, `http://localhost:4200`.
- [ ] Secret `API_BASE_URL` no GitHub apontando para o Cloud Run.
- [ ] Pages servindo branch `gh-pages`; SPA com `404.html` copiado do `index.html`.
