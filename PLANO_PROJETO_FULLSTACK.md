# Plano (ordem completa) — Fullstack Angular + Spring Boot (últimas versões)

## Premissas (com base nas suas escolhas)
- **Auth**: **JWT stateless + Refresh Token**
- **Autorização**: **RBAC simples** (ex.: `ROLE_ADMIN`, `ROLE_USER`)
- **Banco**: PostgreSQL
- **Desacoplamento**: frontend e backend independentes (contrato HTTP estável + CORS + versionamento de API)

---

## 1) Programas e ferramentas para instalar (ambiente)
- **Git** (última versão)
- **Node.js LTS** (recomendado para Angular): usar **nvm-windows** para gerenciar versões
- **Angular CLI** (via npm)
- **Java JDK LTS** (recomendado p/ Spring Boot): **Java 21**
- **Maven** (ou Gradle; vou assumir Maven no plano)
- **Docker Desktop** (para Postgres, e opcionalmente rodar back/front em containers)
- **PostgreSQL** (opcional local; preferir Docker para reprodutibilidade)
- **IDE**: IntelliJ/VSCode/Cursor
- **Ferramentas auxiliares**:
  - **Postman/Insomnia** (testes manuais de API)
  - **pgAdmin/DBeaver** (inspecionar DB)

---

## 2) Estrutura final esperada do projeto (monorepo com apps desacoplados)
- `frontend/` (Angular)
- `backend/` (Spring Boot)
- `docker/` (compose, init scripts)
- `docs/` (arquitetura, threat model simples, decisões)
- `README.md` (como rodar, testes, cobertura)

Exemplo de layout:

- `frontend/`
  - `src/app/core/` (services, interceptors, guards, models, config)
  - `src/app/shared/` (components, directives, pipes reutilizáveis)
  - `src/app/features/` (ex.: `auth/`, `dashboard/`, `products/`)
  - `src/app/layouts/` (ex.: `main-layout/`, `auth-layout/`)
  - `src/app/state/` (ex.: `state.ts`, `effects.ts`, `reducer.ts`)
- `backend/`
  - `src/main/java/.../config/` (security, cors, openapi)
  - `src/main/java/.../domain/` (entidades + regras)
  - `src/main/java/.../application/` (use cases/services)
  - `src/main/java/.../infrastructure/` (repositories, adapters)
  - `src/main/java/.../web/` (controllers, dto, mappers)
  - `src/test/...` (unit + slice tests)
- `docker/`
  - `compose.yml` (Postgres + opcional pgadmin)

---

## 3) Criação do repositório e convenções base
- Inicializar Git e configurar:
  - **Conventional Commits**
  - `.editorconfig`
  - `.gitignore` (Angular/Java/Docker)
- Definir padrões:
  - **API versioning**: `/api/v1/...`
  - **Erros padronizados**: RFC7807 (Problem Details) no backend
  - **Contrato**: OpenAPI como fonte de verdade (para reutilizar front/back separadamente)

---

## 4) Subir infraestrutura local (primeiro para destravar desenvolvimento)
- Criar `docker/compose.yml` com **Postgres** (volume persistente)
- Criar `backend` com config de conexão via env (`SPRING_DATASOURCE_*`)
- Garantir “one command to run”: `docker compose up -d`

Boas práticas:
- secrets via `.env` local (não commitar)
- migrations desde o início

---

## 5) Backend — criação e arquitetura (Spring Boot)

### 5.1 Bootstrapping do projeto
- Gerar projeto Spring Boot (última versão estável) com:
  - **Spring Web**
  - **Spring Security**
  - **Spring Data JPA**
  - **Validation**
  - **Flyway** (migrations)
  - **PostgreSQL driver**
  - **Actuator**
  - **Test** (JUnit5, Mockito)
  - **Jacoco** (cobertura)
  - **(Opcional)** OpenAPI (springdoc)

### 5.2 Modelagem mínima do domínio (para estudo)
- Entidades:
  - `User` (id, email, passwordHash, enabled, roles, timestamps)
  - `Role` (enum ou tabela; para RBAC simples pode ser enum)
  - Um CRUD exemplo: `Item` (id, name, description, ownerId, timestamps)
- Migrations Flyway:
  - V1: users, user_roles, items

### 5.3 Segurança (essencial e “reutilizável”)
- JWT:
  - endpoint `POST /api/v1/auth/login` → access + refresh
  - endpoint `POST /api/v1/auth/refresh` → novo access
  - refresh token armazenado de forma segura (hash + expiração) ou tabela de sessões
- Senhas:
  - **BCrypt** (`PasswordEncoder`)
- Regras:
  - `ROLE_ADMIN`: CRUD de usuários + gerenciar itens
  - `ROLE_USER`: CRUD de itens (com regra de owner quando fizer sentido)
- Hardening:
  - CORS restrito por ambiente
  - headers de segurança
  - rate limit (opcional, mas bom para estudo)
  - validação forte de DTOs (Bean Validation)

### 5.4 API e camadas (para desacoplar)
- `web` (controllers + DTOs) não conhece JPA diretamente
- `application` (services/use-cases) orquestra regras
- `domain` concentra regras/entidades (o mínimo viável)
- `infrastructure` implementa repositórios JPA

---

## 6) Frontend — criação e arquitetura (Angular)

### 6.1 Bootstrapping
- Criar `frontend` com Angular CLI (última versão) e:
  - roteamento
  - SCSS (ou CSS)
  - estrutura de pastas padrão:
    - **Core**: `src/app/core/` (ex.: `services/`, `interceptors/`, `guards/`, `models/`)
    - **Shared**: `src/app/shared/` (ex.: `components/`, `directives/`, `pipes/`)
    - **Features**: `src/app/features/` (ex.: `auth/`, `dashboard/`, `products/`)
    - **Layouts**: `src/app/layouts/` (ex.: `main-layout/`, `auth-layout/`)
    - **State**: `src/app/state/` (ex.: `state.ts`, `effects.ts`, `reducer.ts`)
  - estrutura por **features** (lazy loading) para telas/fluxos

### 6.2 Auth e infraestrutura HTTP
- `AuthService`:
  - login, logout, refresh
  - armazenamento de token (preferência: access em memória + refresh via cookie httpOnly; como é estudo, pode começar com storage e depois evoluir)
- `HTTP Interceptor`:
  - anexar access token
  - tentar refresh em 401 e repetir request
- `Route Guards`:
  - `authGuard`
  - `roleGuard` (RBAC simples no front)

### 6.3 CRUD e UI
- Criar feature `items`:
  - lista, detalhe, criar/editar, excluir
  - formulário com validações
- Criar feature `users` (admin):
  - listagem + alterar roles + habilitar/desabilitar

Boas práticas:
- OnPush onde fizer sentido
- components “smart vs dumb”
- services por feature
- tipagem forte dos DTOs

---

## 7) Contrato e documentação (para garantir reuso)
- Backend expõe OpenAPI
- Front usa:
  - **(Opção A)** clients gerados a partir do OpenAPI, ou
  - **(Opção B)** services manuais mas mantendo DTOs alinhados
- `docs/`:
  - visão geral da arquitetura
  - decisões (por que JWT+refresh, RBAC, migrations)

---

## 8) Testes e cobertura > 90% (estratégia realista)

### Backend
- **Unit tests** para:
  - services/use-cases (principal foco de cobertura)
  - utilitários (JWT, mappers)
- **Slice tests** (mais poucos e cirúrgicos):
  - `@WebMvcTest` para controllers (validação + status codes)
  - `@DataJpaTest` para queries específicas (se houver)
- Jacoco:
  - regra de cobertura mínima por módulo/pacote (não só global)

### Frontend
- Unit tests (Jasmine/Karma ou Jest se preferir) para:
  - services (auth, api)
  - interceptors e guards
  - components principais (items/users) com TestBed + mocks
- Cobertura:
  - thresholds por pasta `core/` e `features/`

---

## 9) Performance e qualidade (checklist embutido no processo)
- Backend:
  - paginação em listagens
  - índices DB (ex.: `email`, `owner_id`)
  - DTO projection quando necessário
  - logs estruturados (sem vazar tokens/senhas)
- Frontend:
  - lazy loading por feature
  - trackBy em listas
  - evitar re-renders (OnPush)
- CI (opcional, mas recomendado):
  - build + test + coverage (front e back)

---

## 10) Ordem prática de execução (passo a passo)
- Criar repo + estrutura `frontend/` e `backend/`
- Subir Postgres via Docker
- Gerar backend Spring Boot + health endpoint
- Adicionar Flyway + migrations iniciais
- Implementar `User` + auth JWT (login/refresh) + security config
- Implementar CRUD `Item` + RBAC/ownership rules
- Escrever testes backend (services + controllers) até >90%
- Gerar frontend Angular + layout base + roteamento
- Implementar Auth (interceptor + guard) + telas login
- Implementar feature `items` (CRUD) + testes
- Implementar feature `users` (admin) + testes
- Ajustar CORS e configs por ambiente
- Documentar `README.md` e `docs/`

