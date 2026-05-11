# Projeto Fullstack (Angular + Spring Boot)

Monorepo de estudo com **frontend** (Angular) e **backend** (Spring Boot) desacoplados, com autenticação **JWT + refresh token**, CRUD de **clientes**, administração de **usuários** (RBAC) e permissões **`ROLE_ADMIN` / `ROLE_USER`**.

## Acesso

- **Interface (produção — GitHub Pages):** [https://caiobolive.github.io/fullstack-angular-java/](https://caiobolive.github.io/fullstack-angular-java/)
  O build de produção usa roteamento com **hash** (`#/customers`, etc.) e a base da API vem de `environment.prod.ts`, substituída no CI pelo workflow em `.github/workflows/deploy-frontend.yml` (`__API_BASE_URL_PLACEHOLDER__`). Para o browser falar com a API, essa URL tem de apontar para um backend acessível publicamente (HTTPS) com CORS autorizado para o domínio do Pages.

## Frontend (Angular)

Aplicação **SPA** em Angular para gestão de **clientes** (CRUD completo), **utilizadores** com controlo de perfil e **autenticação** baseada em tokens. Consome uma API REST no mesmo monorepo (Spring Boot); a base URL e o ambiente vivem em `environment` e `core/config/app-config`.

### Funcionalidades

| Área | Comportamento |
|------|----------------|
| **Clientes — listagem** | Página em `features/customers`: dados paginados (`CustomersApi.list`, `MatPaginator`), estado com **signals** (`customers`, `pageIndex`, `pageSize`, `totalElements`). |
| **Clientes — criação** | Formulário reativo no painel lateral (`mat-sidenav`); envio `POST` para `/api/v1/customers`. |
| **Clientes — edição** | `GET /api/v1/customers/:id`, formulário preenchido com `reset`; persistência com `PUT`. |
| **Clientes — remoção** | Diálogo de confirmação (`CustomersDeleteConfirmDialogComponent`) e `DELETE` na API. |

### Dados apresentados na lista

Cada registo mostra **nome**, **e-mail**, **telefone**, **documento** (CPF ou CNPJ no mesmo campo), **datas de criação e atualização** (`createdAt` / `updatedAt`), além de identificadores úteis na UI (ex.: `id`, `ownerId`).

### Formulários reativos

- **Cadastro e edição** com `FormBuilder` e `FormGroup` não anulável (`customerForm`).
- **Validação**: campos obrigatórios, e-mail, limites de tamanho, documento com comprimento mínimo/máximo adequado a CPF/CNPJ.
- **Feedback de erro** no template (`showErr`, `errMsg`) com base em `touched` / `dirty`.
- **Filtro textual** na lista: `FormControl`, `valueChanges` com `debounceTime(300)` e `distinctUntilChanged`; ao mudar o termo, a paginação regressa à primeira página.

### Integração HTTP

O cliente usa **`HttpClient`** contra o backend REST (`CustomersApi`); não há persistência simulada em JSON local. Em desenvolvimento, o frontend costuma correr em `http://localhost:4200` e a API noutra origem (por exemplo porta `8080`), com CORS tratado no servidor.

### Interface e experiência

- **Angular Material** (toolbar, cards, formulários, botões, ícones, paginação, sidenav, diálogos, tooltips).
- **ngx-skeleton-loader** no carregamento da grelha, com tokens de cor (`--customers-skeleton-*`).
- **Layout responsivo** (navegação compacta com menu em ecrãs estreitos).
- **Tema** claro/escuro (`ThemeService`) e topbar com gradiente suave sobre tokens Material (`styles.scss`).
- **Transições entre rotas** (`route-animations`, `provideAnimations()`).
- Aviso ao fechar o editor com alterações por gravar (`CustomersCloseUnsavedDialogComponent`).

### Autenticação e autorização

- **Login** em rota lazy (`features/auth/login`).
- **JWT** de acesso e **refresh token** em armazenamento dedicado (`TokenStorageService`); renovação em `AuthService.refresh`.
- **Rotas protegidas** com `authGuard`; módulo de **utilizadores** restrito a administradores via `roleGuard(['ROLE_ADMIN'])`.
- **Interceptor** `authInterceptor`: cabeçalho `Authorization: Bearer`; em **401**, tentativa de refresh e repetição do pedido; se falhar, sessão limpa.

### Roteamento, lazy loading e estado

- **Lazy loading** com `loadComponent` em `app.routes.ts` (login, clientes, utilizadores).
- **Guards** em `core/auth/auth.guard.ts` e `core/auth/role.guard.ts`.
- **Estado**: signals e `computed` na área de clientes; serviços `providedIn: 'root'`; RxJS para HTTP, debounce e `takeUntilDestroyed`.

### Testes

Cobertura de unidade com Jasmine/Karma, incluindo:

- `app.component.spec.ts`
- `features/customers/customers.page.spec.ts`, `features/users/users.page.spec.ts`
- `core/auth/auth.guard.spec.ts`, `role.guard.spec.ts`, `auth.interceptor.spec.ts`, `auth.service.spec.ts`, `token-storage.service.spec.ts`
- `api/customers.api.spec.ts`, `api/users.api.spec.ts`
- `core/theme/theme.service.spec.ts`

Na pasta `frontend`: `npm test` ou `npx ng test`.

### Estrutura de pastas (app)

- **`features/`** — páginas por domínio (clientes, utilizadores, autenticação).
- **`api/`** — serviços HTTP por recurso (`customers.api.ts`, `users.api.ts`).
- **`core/`** — autenticação, tema, configuração partilhada.
- **Componentes standalone**, `ChangeDetectionStrategy.OnPush` onde faz sentido, e CSS global pontual (ex.: topbar) em `styles.scss`.

### Deploy

- **URL publicada:** [https://caiobolive.github.io/fullstack-angular-java/](https://caiobolive.github.io/fullstack-angular-java/)
- Configuração do pipeline e detalhes adicionais: `frontend/README.md` e `.github/workflows/deploy-frontend.yml`.

---

## Backend (Java Spring Boot)

API **REST** stateless que persiste dados em **PostgreSQL**, com migrações **Flyway** e segurança baseada em **JWT** (resource server OAuth2). Expõe recursos sob o prefixo **`/api/v1`**.

### Stack e execução

- **Spring Boot** 4.x, **Java** 21.
- **Spring Data JPA** + Hibernate; **Flyway** para versão de esquema (`src/main/resources/db/migration`).
- **Spring Security**: sessão `STATELESS`, validação de JWT HS256 (`SecurityConfig`, `JwtEncoder` / `JwtDecoder`), `BCrypt` para passwords.
- Arranque local: na pasta `backend`, `.\mvnw.cmd spring-boot:run` (Windows) ou `./mvnw spring-boot:run`. Perfil por omissão **dev** (`application-dev.properties`).

### Autenticação

- **`POST /api/v1/auth/login`** — corpo com e-mail e password; resposta com **access token** (JWT), **refresh token** opaco e data de expiração do refresh.
- **`POST /api/v1/auth/refresh`** — renova tokens a partir do refresh; refresh guardado na base como **hash** (`TokenHasher`), não em texto claro.
- JWT inclui **roles** (`ROLE_ADMIN`, `ROLE_USER`) consumidas pelo `JwtAuthenticationConverter`.

### Clientes (`/api/v1/customers`)

| Método | Caminho | Descrição |
|--------|---------|-----------|
| `GET` | `/api/v1/customers` | Lista **paginada**; query `page`, `size`, opcional `q` (pesquisa textual). |
| `GET` | `/api/v1/customers/{id}` | Detalhe por UUID. |
| `POST` | `/api/v1/customers` | Criação; corpo validado (`@Valid`) — nome, e-mail, telefone, documento. |
| `PUT` | `/api/v1/customers/{id}` | Atualização. |
| `DELETE` | `/api/v1/customers/{id}` | Remoção (`204`). |

Regras de negócio em `CustomerService`:

- **`ROLE_USER`**: vê e gere apenas clientes cujo **`ownerId`** é o utilizador autenticado; pesquisa e listagem respeitam o mesmo isolamento.
- **`ROLE_ADMIN`**: acesso a todos os registos e pesquisa global.
- Parâmetro de pesquisa **normalizado** (trim, limite de tamanho, remoção de caracteres perigosos para `LIKE`).

Contratos HTTP e DTOs em `CustomerController` (records `CustomerResponse`, `CustomerUpsertRequest`, `CustomerPageResponse`).

### Utilizadores (`/api/v1/users`)

Controlador anotado com **`@PreAuthorize("hasAuthority('ROLE_ADMIN')")`** — apenas administradores.

- **`GET /api/v1/users`** — listagem.
- **`GET /api/v1/users/{id}`** — detalhe.
- **`POST /api/v1/users`** — criação (e-mail, password, roles).
- **`PATCH /api/v1/users/{id}`** — atualização parcial (roles, `enabled`), com salvaguardas no serviço (ex.: não desativar a si próprio).

Lógica em `UserAdminService`; entidade `UserAccount` com conjunto de `Role`.

### Saúde e CORS

- **`GET /api/v1/health`** e **`GET /actuator/health`** — públicos (útil para probes).
- **CORS** configurável via `CorsProperties` / propriedades da aplicação: origens, métodos e cabeçalhos alinhados ao cliente Angular.

### Organização do código (backend)

- **`web/`** — controladores REST (`auth`, `customers`, `users`, `HealthController`).
- **`application/`** — casos de uso (`AuthService`, `CustomerService`, `UserAdminService`), `CurrentUser`, hashing de tokens.
- **`domain/`** — entidades JPA (`Customer`, `UserAccount`, `RefreshToken`, enums `Role`).
- **`infrastructure/`** — repositórios Spring Data.
- **`config/`** — segurança, CORS, propriedades, *seed* de desenvolvimento (`DevSeedConfig`) quando aplicável.

### Testes

Testes JUnit na pasta `backend/src/test/java`, entre outros:

- `BackendApplicationTests` — contexto da aplicação.
- `UserAdminServiceTest` — regras de administração de utilizadores.
- `CustomerServiceNormalizeSearchTest` — normalização do termo de pesquisa.

Comando: na pasta `backend`, `.\mvnw.cmd test` ou `./mvnw test`.

### Base de dados

O esquema evolui com Flyway (ex.: utilizadores e tokens, tabela de **customers** com dono e auditoria). Para Postgres local, ver a secção **Postgres local (Docker)** abaixo e o script `scripts/migrate-db.ps1`.

---

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

(Equivalente: ao iniciar o backend com `.\mvnw.cmd spring-boot:run`, o Flyway também roda automaticamente.) A migration `V2__clients_replace_items.sql` remove `items` e cria a tabela intermediária `clients`; a `V3__customers_rename_from_clients.sql` renomeia para **`customers`** (API `/api/v1/customers`).

## Plano
O plano completo está em `PLANO_PROJETO_FULLSTACK.md`.

