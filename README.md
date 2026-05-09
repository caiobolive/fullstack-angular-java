# Projeto Fullstack (Angular + Spring Boot)

Monorepo de estudo com **frontend** (Angular) e **backend** (Spring Boot) desacoplados, com autenticação **JWT + refresh token**, CRUD de **clientes**, administração de **usuários** (RBAC) e permissões **`ROLE_ADMIN` / `ROLE_USER`**.

## Estrutura
- `frontend/` — aplicação Angular
- `backend/` — API Spring Boot
- `docker/` — infraestrutura local (Postgres etc.)
- `docs/` — documentação de arquitetura/decisões
- `scripts/` — scripts auxiliares

## Postgres local (Docker)

1. Entre em `docker/`.
2. Copie o template de variáveis: `docker/.env.example` → `docker/.env` (mesmo nome que o `compose.yml` espera via `env_file`).
3. Suba o banco: `docker compose up -d`.

Os valores padrão batem com `backend/src/main/resources/application-dev.properties` (usuário `fullstack_user`, banco `fullstack_db`). Troque a senha em `docker/.env` e no Spring (`spring.datasource.password` ou `SPRING_DATASOURCE_PASSWORD`).

### Migrations Flyway só no Postgres (sem subir a API)

Com o Postgres no ar:

```powershell
powershell -ExecutionPolicy Bypass -File scripts/migrate-db.ps1
```

(Equivalente: ao iniciar o backend com `.\mvnw.cmd spring-boot:run`, o Flyway também roda automaticamente.) A migration `V2__clients_replace_items.sql` remove a tabela `items` e cria `clients`.

## Plano
O plano completo está em `PLANO_PROJETO_FULLSTACK.md`.

