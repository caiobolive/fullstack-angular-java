# Plano — Fullstack Angular + Spring Boot (referência + prompt para recriar projeto semelhante)

Este documento descreve **premissas**, **ordem prática do que foi desenvolvido neste monorepo**, **armadilhas de setup que apareceram no caminho**, e um **bloco final copiável como prompt** para gerar outro projeto no mesmo estilo.

**Domínio principal do front (alinhado a teste técnico Angular Pleno):** gestão de **clientes** (CRUD). **Usuários** permanecem para **RBAC** (`ROLE_ADMIN` / `ROLE_USER`) e tela admin.

**Versões efetivas neste repositório (verificação):**
- **Backend**: Spring Boot **4.0.5**, Java **21**, Maven.
- **Frontend**: Angular **~21.2.x**, TypeScript **~5.9**, Karma + Jasmine; **Puppeteer** para apontar o Chrome usado nos testes.
- **Banco**: PostgreSQL **17** (imagem `postgres:17-alpine` no Docker Compose).

---

## Como usar este arquivo como “prompt mestre”

1. Copie a seção **Prompt para recriar um projeto semelhante** (final do documento).
2. Cole no assistente com estas instruções extras:
   - “Siga a ordem dos passos; pare para eu validar após infra + login funcionando.”
   - “Use os endpoints `/api/v1` e o mesmo modelo de auth (JWT HS256 + refresh com hash).”
3. Se algo falhar no seu ambiente, cruze com **Armadilhas comuns de setup** abaixo.

---

## Premissas de arquitetura
- **Auth**: JWT **stateless** no header `Authorization: Bearer …` + **refresh token** persistido com **hash** (não guardar refresh em texto puro).
- **Autorização**: RBAC simples (`ROLE_ADMIN`, `ROLE_USER`) refletida no JWT (`roles`) e mapeada para **authorities** no Spring Security.
- **Banco**: PostgreSQL em desenvolvimento (Docker); testes de backend com **H2** em memória.
- **Desacoplamento**: frontend e backend independentes (CORS, contrato HTTP `/api/v1`, DTOs alinhados manualmente no front).

---

## 1) Ferramentas (instalação no ambiente)

### Obrigatório para desenvolvimento local
- **Git**
- **Node.js LTS** + npm (recomendável **nvm-windows** no Windows)
- **JDK 21** (`JAVA_HOME` consistente; no Windows é comum conflito User vs Machine — há script auxiliar `scripts/check-env.ps1`)
- **Maven** (ou use o wrapper `backend/mvnw` / `backend/mvnw.cmd`)

### Fortemente recomendado
- **Docker Desktop** (Postgres via Compose). No Windows, sem daemon ativo o erro típico é falha ao conectar em `npipe:////./pipe/docker_engine`.
- **Postman/Insomnia** ou coleções na pasta `postman/` / `.postman/` (quando existirem)

### Opcional
- **PostgreSQL instalado no host** (alternativa ao Docker)
- **pgAdmin/DBeaver**

---

## 2) Estrutura real deste monorepo

```
Fullstack/
├── backend/                 # Spring Boot API
├── frontend/                # Angular SPA
├── docker/                  # compose.yml + .env.example (copiar para .env local; .env não versionado)
├── scripts/                 # check-env.ps1 (diagnóstico JAVA_HOME/PATH no Windows)
├── postman/ , .postman/     # artefatos Postman (quando presentes)
├── README.md
├── RESUMO_BACKEND_JAVA.md   # resumo técnico do backend (mantido junto ao código)
└── PLANO_PROJETO_FULLSTACK.md
```

**Observação**: o `README.md` menciona `docs/` como pasta ideal; ela pode ser criada depois para ADRs/threat model.

**Frontend (alvo descrito neste plano):** `features/clients/` (CRUD clientes), `features/auth/login/`, `features/users/` (admin), APIs em `src/app/api/` (`clients.api.ts`, `users.api.ts`, etc.).

---

## 3) Convenções do projeto
- **Versionamento de API**: `/api/v1/...` (constante `ApiPaths.API_V1`).
- **Erros**: hoje misturam `ResponseStatusException` / validação Bean Validation / `AccessDeniedException` (403). **RFC7807 (Problem Details)** permanece como próximo passo de padronização.
- **OpenAPI**: não é obrigatório neste repo; contrato está implícito nos controllers + serviços TS (`frontend/src/app/api/*.ts`).
- **Commits**: Conventional Commits (recomendado), `.editorconfig` e `.gitignore` no root/apps.

---

## 4) Infraestrutura — Postgres via Docker

### Arquivo
- `docker/compose.yml`: serviço `postgres`, porta **5432**, volume nomeado `pgdata`, healthcheck com `pg_isready`.

### Peculiaridade importante
- O compose referencia **`env_file: .env` dentro de `docker/`**. O arquivo real **`docker/.env` não deve ir para o Git** (credenciais). Sem ele, o compose falha ou sobe com variáveis incorretas.

### Template versionado (`docker/.env.example`)
- No repositório há **`docker/.env.example`** com os mesmos nomes de variável esperados pelo Postgres oficial.
- Para criar seu `.env` local:

```bash
cd docker
cp .env.example .env
```

No Windows (PowerShell/cmd no diretório `docker/`): `copy .env.example .env`

Edite `docker/.env` se mudar senha ou nomes de DB/usuário — alinhe com `backend/src/main/resources/application-dev.properties` (`spring.datasource.*`) ou sobrescreva via env `SPRING_DATASOURCE_URL`, `SPRING_DATASOURCE_USERNAME`, `SPRING_DATASOURCE_PASSWORD`.

### Armadilhas comuns (Windows / Docker)
- **`unable to get image ... failed to connect to the docker API ... docker_engine`**: Docker Desktop **não está rodando** ou serviço indisponível → abrir Docker Desktop / corrigir instalação (WSL2 recomendado).
- **Porta 5432 ocupada**: outro Postgres local já escutando → mudar mapeamento `"5433:5432"` no compose ou parar o serviço local.
- **Compose sem `.env`**: erro ao subir ou credenciais inconsistentes com o Spring.

### Comando
```bash
cd docker
docker compose up -d
```

---

## 5) Backend — o que foi desenvolvido (ordem prática)

### 5.1 Bootstrap Spring Boot
- Projeto Maven com parent **Spring Boot 4.0.x**.
- Dependências principais (nomes efetivos no `pom.xml`):
  - `spring-boot-starter-webmvc`
  - `spring-boot-starter-security`
  - `spring-boot-starter-oauth2-resource-server` (**validação JWT** como resource server)
  - `spring-boot-starter-data-jpa`, `spring-boot-starter-validation`, `spring-boot-starter-flyway`
  - `postgresql` (runtime), `flyway-database-postgresql`
  - Testes: starters `*-test` modulares + **H2** (`scope test`)

**Peculiaridade**: em Spring Boot mais novo, starters podem aparecer como **`webmvc`** em vez de `web`; gere/atualize dependências olhando o `pom.xml` gerado pelo Initializr da mesma versão.

### 5.2 Configuração base
- `application.properties`: profile default `dev`, Actuator (`health`, `info`), `spring.jpa.open-in-view=false`.
- `application-dev.properties`: datasource Postgres local, Flyway ligado, `ddl-auto=validate`, JWT via prefixo `app.security.jwt.*`.
- `SecurityProperties`: binding tipado das propriedades JWT (issuer, TTLs, segredo HMAC).

### 5.3 Schema Flyway
- `db/migration/V1__init.sql`: tabelas `users`, `user_roles`, **`clients`** (substituindo o antigo conceito de “items”), `refresh_tokens` + índices.
- Tabela **`clients`** (modelo alinhado ao briefing de clientes + ownership):
  - Identificador UUID, **nome**, **e-mail**, **telefone**, **documento** (CPF ou CNPJ — um campo com validação no DTO ou dois campos mutuamente exclusivos, conforme decisão do projeto),
  - **`owner_id`** referenciando o usuário dono do registro (base das regras RBAC),
  - **`created_at`**, **`updated_at`** (listagem deve expor pelo menos uma data; recomenda-se mostrar ambas na UI).

### 5.4 Domínio
- `Role` enum (`ROLE_ADMIN`, `ROLE_USER`).
- `UserAccount` (`users` / `user_roles` como `@ElementCollection`).
- **`Client`** (entidade JPA) com `ownerId` para ownership e campos do briefing (nome, email, telefone, documento, timestamps).
- `RefreshToken` com `token_hash`, expiração e revogação.

### 5.5 Autenticação e tokens
- `AuthService`: login valida email case-insensitive, `enabled`, BCrypt; emite access JWT; refresh aleatório persistido como **SHA-256** (`TokenHasher`); refresh com **rotação** (revoga o usado, emite novo).
- `AuthController`: `POST /api/v1/auth/login`, `POST /api/v1/auth/refresh`.

**Peculiaridades JWT**
- Access token assinado **HS256** (`NimbusJwtEncoder` / `NimbusJwtDecoder` com `MacAlgorithm.HS256`) para decoder e encoder ficarem alinhados.
- Claims úteis: `sub` = UUID do usuário, `email`, lista `roles`.

### 5.6 Segurança HTTP
- `SecurityFilterChain`: stateless, CSRF off, `/api/v1/auth/**` e health públicos, demais autenticados; OAuth2 Resource Server JWT.
- `@EnableMethodSecurity` + `@PreAuthorize` no módulo admin de usuários.
- `JwtAuthenticationConverter`: transforma claim `roles` em **GrantedAuthority** (para `hasAuthority('ROLE_ADMIN')` funcionar).
- **CORS** explícito para `http://localhost:4200`.

**Peculiaridade corrigida durante verificação**: ao usar **`PATCH`** no browser (tela admin de usuários), o CORS precisa listar **`PATCH`** em `allowedMethods` — caso contrário o preflight falha silenciosamente no front.

### 5.7 Casos de uso e endpoints de negócio
- `CurrentUser`: lê `JwtAuthenticationToken` → `requireUserId()`, `hasRole(...)`.
- **`ClientService` + `ClientController` (`/api/v1/clients`)**:
  - **Admin** lista/vê/edita/exclui **todos** os clientes.
  - **Usuário comum** lista/vê/edita/exclui apenas clientes com **`ownerId == sub`** do JWT (senão **403**).
- `UserAdminService` + `UserController` (`/api/v1/users`, **somente admin**):
  - `GET` lista ordenada por email; `GET /{id}`; `POST` cria (email normalizado; duplicidade **409**; roles obrigatórias **400**).
  - `PATCH /{id}` atualiza `enabled` + `roles` com proteção: admin não pode **desativar a si mesmo** nem **remover seu próprio `ROLE_ADMIN`** (**400**).

### 5.8 Seed de desenvolvimento
- `DevSeedConfig` (`@Profile("dev")`): garante usuário admin padrão ou atualiza senha/roles.
  - Email/senha padrão: `admin@example.com` / `admin123`
  - Overrides: `APP_SEED_ADMIN_EMAIL`, `APP_SEED_ADMIN_PASSWORD`

### 5.9 Outros endpoints
- `GET /api/v1/health` — smoke test rápido.

### 5.10 Testes backend
- Testes rodam com **H2**, Flyway **desligado** em `src/test/resources/application.properties`, `ddl-auto=create-drop`.
- Testes unitários de exemplo: `UserAdminServiceTest` (Mockito); incluir **`ClientService`** quando implementado.
- `BackendApplicationTests` sobe contexto (integração leve).

**Peculiaridade**: warnings do Mockito sobre “inline mock maker” / Java agent podem aparecer no JDK 21 — são ruído conhecido até configurar o agent do Mockito conforme a documentação deles.

**Nota**: Jacoco com gate de cobertura **não** está configurado neste `pom.xml` atual (permanece como melhoria).

---

## 6) Frontend — o que foi desenvolvido (ordem prática)

### 6.1 Bootstrap Angular
- App com rotas standalone / lazy routes (`loadComponent`).
- Estilo: SCSS global (`styles.scss`), componentes com estilos inline onde aplicável.

### 6.2 Configuração de API
- `APP_CONFIG.apiBaseUrl` — base para todas as chamadas (`http://localhost:8080` típico).

### 6.3 Autenticação
- `TokenStorageService`: tokens em `localStorage` (`access_token`, `refresh_token`) — modelo simples para estudo (evoluir depois para httpOnly refresh, etc.).
- `AuthService`: login/refresh/logout; decodificação **mínima** do JWT no cliente (`sub`, `roles`) para guards/UI (**sem verificação criptográfica no browser**).
- `authInterceptor`: anexa Bearer; em **401** tenta refresh e refaz a request.
- `authGuard` + `roleGuard(['ROLE_ADMIN'])`.

### 6.4 Features
- **`login`**: página de login.
- **`clients`** (rota sugerida **`/clients`**, redirect default da app pode apontar para ela): CRUD consumindo **`/api/v1/clients`** **ou** (somente para protótipo isolado) JSON local + serviço que simula API — preferência neste monorepo: **API real + JWT**, para valorizar interceptor/guards.
- **`users` (admin)**: lista, criar usuário, editar **roles/enabled** com `PATCH` (`UsersApi.update`).
- **`app.component`**: navegação condicional (link **Usuários** só para admin).

### 6.5 Escopo de UI — clientes (briefing teste técnico Angular Pleno)

Referência externa típica: CRUD de clientes em até ~3 dias, com foco em **Reactive Forms**, boa organização e testes como diferencial.

Requisitos que o plano considera **obrigatórios** para a feature clientes:
1. **Listagem**: nome, e-mail, telefone, CPF **ou** CNPJ, data de **criação ou atualização** (ideal: exibir `createdAt` / `updatedAt` quando o backend expuser ambos).
2. **Cadastro e edição**: **formulários reativos** (`FormBuilder` / `FormGroup`) com **validações** e **mensagens de erro** por campo.
3. **Exclusão**: fluxo com **confirmação** (dialog ou `confirm` mínimo).
4. **Biblioteca de UI**: opcional; se usar, preferir **Angular Material** de forma consistente.

Requisitos **já atendidos no monorepo como “plus”** em relação ao briefing: lazy loading, guards, interceptor, autenticação JWT — mantidos em paralelo à feature clientes.

### 6.6 Testes frontend
- Karma + Jasmine; `karma.conf.js` define `CHROME_BIN` via **`puppeteer.executablePath()`** para estabilidade no Windows.

**Armadilhas**
- Se Puppeteer não baixar/baixar Chrome corretamente, o Karma pode falhar ao “capturar” o ChromeHeadless.
- Ambientes CI restritos podem precisar de flags extras ou imagem com Chrome pré-instalado.

---

## 7) Contrato HTTP resumido (referência rápida)

### Público
- `POST /api/v1/auth/login`
- `POST /api/v1/auth/refresh`
- `GET /api/v1/health`

### Autenticado (Bearer access JWT)
- `GET/POST/PUT/DELETE /api/v1/clients`

### Autenticado + admin (`ROLE_ADMIN`)
- `GET /api/v1/users`
- `GET /api/v1/users/{id}`
- `POST /api/v1/users`
- `PATCH /api/v1/users/{id}`

**Headers**: `Authorization: Bearer <accessToken>`  
**CORS dev**: origem `http://localhost:4200`

---

## 8) Testes e qualidade — expectativa realista

### Backend
- Priorizar testes unitários em services (`AuthService`, **`ClientService`**, `UserAdminService`).
- Adicionar `@WebMvcTest` pontuais para validação HTTP e códigos de status quando estabilizar contratos de erro.

### Frontend
- Cobrir `AuthService`, interceptor, guards e APIs (`*.api.spec.ts`).
- Feature **clientes**: specs do `clients.api`, formulário reativo (validações/mensagens), lista e fluxo de exclusão.
- Definir meta de cobertura depois que Karma estiver estável na máquina/CI.

---

## 9) Performance e hardening (checklist evolutivo)

- Paginação em listas grandes (`/users`, **`/clients`** para admin ou para todos quando volume crescer).
- Problem Details (RFC7807) para erros uniformes.
- Rate limiting e headers de segurança adicionais (produção).
- Rotacionar segredos JWT via env/secrets manager (nunca commitar segredo real).

---

## 10) Ordem de execução para um novo dev (checklist operacional)

1. Instalar JDK 21, Node LTS, Docker Desktop (Windows: validar daemon rodando).
2. Copiar `docker/.env.example` → `docker/.env` e ajustar senhas se necessário (alinhar ao Spring `application-dev` ou env `SPRING_DATASOURCE_*`).
3. `docker compose up -d` dentro de `docker/`.
4. Subir backend (`mvnw spring-boot:run` ou IDE) e confirmar Flyway aplicou migrations (schema com **`clients`**).
5. Login com seed dev (`admin@example.com` / `admin123` se não mudou env).
6. Subir frontend (`npm install`, `npm start`), testar fluxo login → **clientes** (`/clients`) → **usuários** (admin, `/users`).
7. Postman: salvar access token e exercitar **`/api/v1/clients`** e **`/api/v1/users`**.

---

## 11) Entrega (checklist estilo teste técnico)

- Repositório Git (GitHub público ou privado conforme instrução da empresa).
- **README** com: como subir Docker/backend/front, credenciais seed, campos da lista de clientes e decisão **API vs JSON local** (se aplicável).
- **Opcional**: link de deploy (GitHub Pages, Vercel, etc.).

---

## Prompt para recriar um projeto semelhante (copiar/colar)

```
Quero criar um monorepo de estudo fullstack desacoplado com:

Stack:
- Backend: Java 21 + Spring Boot (última estável) + Maven
- Frontend: Angular (última estável) + TypeScript estrito
- DB: PostgreSQL (Docker Compose)
- Auth: JWT access token (HS256, OAuth2 Resource Server) + refresh token persistido com HASH (SHA-256) + rotação no refresh
- RBAC: ROLE_ADMIN e ROLE_USER no JWT como lista "roles", convertida para GrantedAuthority
- Senhas: BCrypt

Requisitos backend:
- Pacotes: config, domain, infrastructure, application, web
- Flyway migration inicial criando: users, user_roles (element collection), clients (nome, email, telefone, documento CPF ou CNPJ, owner_id UUID, timestamps), refresh_tokens
- Endpoints:
  - POST /api/v1/auth/login, POST /api/v1/auth/refresh
  - GET /api/v1/health
  - CRUD /api/v1/clients com regras:
    - ADMIN lista/vê/edita/deleta todos os clientes
    - USER lista/vê/edita/deleta apenas clientes com ownerId == sub do JWT
  - Admin /api/v1/users:
    - GET list ordenado por email, GET by id, POST create (normalizar email; 409 duplicado; roles obrigatórias)
    - PATCH update enabled + roles com proteção anti auto-bloqueio (não desativar a si mesmo; não remover ROLE_ADMIN de si mesmo)
  - Method security @PreAuthorize no controller admin
  - CORS permitindo http://localhost:4200 incluindo métodos GET POST PUT PATCH DELETE OPTIONS
  - Seed apenas profile dev criando admin padrão (email/senha configuráveis por env)

Requisitos frontend:
- Rotas lazy (standalone components): login, clients protegido por authGuard, users protegido por authGuard + roleGuard ROLE_ADMIN
- Feature clients em /clients: listagem (nome, email, telefone, CPF ou CNPJ, data criação ou atualização), CRUD com Reactive Forms + validações e mensagens de erro; exclusão com confirmação; consumir /api/v1/clients (ou documentar JSON local apenas se for modo protótipo)
- Opcional: Angular Material para UI
- TokenStorage localStorage simples
- Interceptor com Bearer + refresh automático em 401
- AuthService com decode mínimo de JWT para roles/sub (sem validar assinatura no browser)
- Telas: login, clients CRUD, users admin (list/create/edit roles+enabled)
- Angular tests com Karma; usar Puppeteer para definir CHROME_BIN no karma.conf.js

Testes:
- Backend: H2 para testes, Flyway desligado nos testes com ddl-auto create-drop; testes unitários Mockito para services principais (Auth, Client, UserAdmin)
- Frontend: specs para api clients/users, interceptor, guards, formulário clientes

Entrega:
- README com como subir Postgres (docker/.env.example → docker/.env), backend e frontend; link repo e opcional deploy

Siga uma ordem incremental: (1) compose + flyway + health, (2) auth login/refresh, (3) clients RBAC + ownership, (4) users admin, (5) frontend auth + clients + users, (6) testes mínimos.
Pare após (2) para eu validar tokens no Postman.
```
