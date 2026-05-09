
# Resumo detalhado — Backend Java (Spring Boot)


Este documento descreve **tudo que foi criado/alterado no backend Java** até agora, com o objetivo de manter **arquitetura desacoplada**, autenticação **JWT + refresh token**, e uma base sólida para CRUD e permissões (RBAC) conforme o plano em `PLANO_PROJETO_FULLSTACK.md`.

---
## Visão geral da arquitetura aplicada

Organizamos o backend em pacotes com responsabilidades claras:
- **`config/`**: configuração de infraestrutura (Spring Security, propriedades tipadas).
- **`domain/`**: entidades e regras de domínio (JPA Entities + invariantes simples).
- **`infrastructure/`**: acesso a dados (repositórios Spring Data JPA).
- **`application/`**: casos de uso/serviços (login, refresh, hashing).
- **`web/`**: camada HTTP (controllers, paths, DTOs de request/response).

Boas práticas aplicadas desde o começo:
- **API versionada**: base `/api/v1` centralizada em constante.
- **Stateless**: sem sessão HTTP (`SessionCreationPolicy.STATELESS`).
- **Senhas com BCrypt** (via `PasswordEncoder`).
- **Refresh token armazenado como hash** (não guardar o token puro no banco).
- **Rotação de refresh token** no endpoint de refresh (revoga o token usado e emite um novo).
- **Teste não depende de Postgres** (config de test com H2; infra pode ser ajustada por profile).

---
## Arquivos criados/alterados (por responsabilidade)

### Bootstrap da aplicação

#### `backend/src/main/java/com/fullstack/study/BackendApplication.java`

- **Função**: ponto de entrada do Spring Boot.
- **Destaque**:
  - `@ConfigurationPropertiesScan(...)` habilita o binding de propriedades para `SecurityProperties`.

Método importante:
- **`main(...)`**: inicializa a aplicação (`SpringApplication.run`).

---
### Convenções da API

#### `backend/src/main/java/com/fullstack/study/web/ApiPaths.java`
- **Função**: centralizar paths da API para evitar “strings mágicas” espalhadas.
- **Destaque**:
  - `API_V1 = "/api/v1"`

Boas práticas:
- Facilita refactor/versionamento (ex.: migrar para `/api/v2` sem caça a strings).

#### `backend/src/main/java/com/fullstack/study/web/HealthController.java`
- **Função**: endpoint simples para “vida” da API (separado do Actuator).
- **Endpoint**: `GET /api/v1/health`

- **Método importante**:
  - `health()`: retorna `{ "status": "UP" }` (útil para smoke tests e integração local).

---
### Configuração de segurança (Spring Security + JWT)

#### `backend/src/main/java/com/fullstack/study/config/SecurityProperties.java`

- **Função**: encapsular as configurações de JWT (issuer, TTL, segredo) via `@ConfigurationProperties`.
- **Prefixo**: `app.security.jwt.*`
- **Campos**:
  - `issuer`: emissor esperado nos tokens (validação no decoder)
  - `accessTokenMinutes`: validade do access token
  - `refreshTokenDays`: validade do refresh token
  - `hmacSecret`: segredo HMAC para assinar/verificar JWT (HS256)

Boas práticas:
- Propriedades **tipadas** reduzem erro de digitação e facilitam testes.
#### `backend/src/main/java/com/fullstack/study/config/SecurityConfig.java`
- **Função**: configurar o pipeline de segurança (filtros, regras de acesso) e infraestrutura JWT.

Beans importantes:
- **`SecurityFilterChain securityFilterChain(HttpSecurity)**
  - `csrf.disable()`: API stateless (CSRF é típico de sessão/cookie; aqui usamos JWT via header).
  - `SessionCreationPolicy.STATELESS`: garante que o servidor não cria sessão.
  - `authorizeHttpRequests(...)`:

    - libera:
      - `GET /actuator/health`
      - `/api/v1/health`
      - `/api/v1/auth/**`
    - exige auth no resto (`anyRequest().authenticated()`).
  - `oauth2ResourceServer(jwt(...))`: habilita validação automática do bearer token.

- **`PasswordEncoder passwordEncoder()`**
  - BCrypt para armazenamento seguro de senhas.

- **`JwtEncoder jwtEncoder(SecurityProperties)`**
  - Assinatura **HMAC HS256** com `NimbusJwtEncoder`.

- **`JwtDecoder jwtDecoder(SecurityProperties)`**
  - Valida token HS256 com `NimbusJwtDecoder`.
  - Validações aplicadas:
    - **timestamp** (`JwtTimestampValidator`)
    - **issuer** (`JwtIssuerValidator`)

- **`JwtAuthenticationConverter jwtAuthenticationConverter()`**
  - Converte o claim `roles` (lista de strings, ex.: `["ROLE_ADMIN","ROLE_USER"]`) em `GrantedAuthority`.
  - Resultado: roles do JWT viram `authorities` acessíveis via `hasAuthority(...)` / `@PreAuthorize`.

- **`CorsConfigurationSource corsConfigurationSource()`**
  - CORS habilitado para **`http://localhost:4200`** (frontend dev).
  - Métodos permitidos: `GET`, `POST`, `PUT`, `DELETE`, `OPTIONS`.
  - Headers permitidos: `Authorization`, `Content-Type`.

Boas práticas:
- Validação de `issuer` evita aceitar tokens de “outra aplicação”.
- Config stateless e endpoints públicos explícitos.
- `@EnableMethodSecurity` habilita anotações como `@PreAuthorize` (usado no módulo admin de usuários).

---
### Domínio (JPA Entities)

#### `backend/src/main/java/com/fullstack/study/domain/Role.java`
- **Função**: enum com roles (RBAC simples).
- Valores:
  - `ROLE_ADMIN`
  - `ROLE_USER`
#### `backend/src/main/java/com/fullstack/study/domain/UserAccount.java`
- **Função**: entidade do usuário para autenticação/autorização.
- Tabela: `users`
- Campos:
  - `id` (UUID, gerado)
  - `email` (único, até 320 chars)
  - `passwordHash`
  - `enabled`
  - `roles` via `@ElementCollection` em tabela `user_roles` (EAGER)
  - `createdAt`, `updatedAt`

Métodos importantes:
- **`setPasswordHash(...)`**, **`setEnabled(...)`**, **`setRoles(...)`**: atualizam `updatedAt`.

Boas práticas:
- `passwordHash` separado da senha.
- `enabled` permite bloqueio sem deletar.
- Roles em coleção dedicada facilita RBAC.

#### `backend/src/main/java/com/fullstack/study/domain/Client.java`
- **Função**: entidade de **cliente** para CRUD (alinhado ao briefing front-end: nome, contato, documento).
- Tabela: `clients` (criada/reestruturada pela migration `V2__clients_replace_items.sql`, que remove a tabela legada `items`).
- Campos:
  - `id` (UUID)
  - `name`, `email`, `phone`, `document` (CPF ou CNPJ)
  - `ownerId` (UUID do dono — RBAC + ownership)
  - `createdAt`, `updatedAt`

Métodos importantes:
- `setName(...)`, `setEmail(...)`, `setPhone(...)`, `setDocument(...)` atualizam `updatedAt`.

#### `backend/src/main/java/com/fullstack/study/domain/RefreshToken.java`
- **Função**: persistir refresh tokens com segurança.
- Tabela: `refresh_tokens`
- Campos:
  - `userId` (FK lógica, e FK real no banco via Flyway)
  - `tokenHash` (**hash SHA-256 do refresh token**)
  - `expiresAt`, `revokedAt`, `createdAt`

Métodos importantes:
- **`isRevoked()`**: token já foi invalidado.
- **`isExpired(now)`**: token expirado.
- **`revoke(now)`**: marca revogação (para rotação/revogação).

Boas práticas:
- **Não armazenar refresh token em texto puro**, somente hash.
- Índices para `user_id` e `expires_at` para desempenho.

---
### Persistência (Spring Data JPA)

#### `backend/src/main/java/com/fullstack/study/infrastructure/UserAccountRepository.java`
- **Função**: CRUD de usuários + queries por email.
- Métodos:
  - `findByEmailIgnoreCase(...)`
  - `existsByEmailIgnoreCase(...)`
  - `findAllByOrderByEmailAsc()` (listagem admin determinística por email)

#### `backend/src/main/java/com/fullstack/study/infrastructure/ClientRepository.java`
- **Função**: CRUD de `Client` (no futuro: paginação, filtros, busca por owner).
- Método:
  - `findAllByOwnerId(UUID ownerId)` (base para ownership no `ClientService`)

#### `backend/src/main/java/com/fullstack/study/infrastructure/RefreshTokenRepository.java`
- **Função**: CRUD de refresh tokens + housekeeping.
- Métodos:
  - `findByTokenHash(...)`
  - `deleteByExpiresAtBefore(...)` (base para job de limpeza no futuro)

---
### Casos de uso (Application Layer)

#### `backend/src/main/java/com/fullstack/study/application/TokenHasher.java`
- **Função**: hashing de tokens com SHA-256 para persistência segura.
- Método importante:
  - **`sha256Hex(String)`**: retorna hash hex; encapsula `MessageDigest`.

Boas práticas:
- Centraliza hashing e facilita evolução (ex.: usar Argon2/scrypt para tokens, ou incluir salt).

#### `backend/src/main/java/com/fullstack/study/application/AuthService.java`
- **Função**: implementar o fluxo de autenticação e refresh (JWT + refresh token).
- Dependências:
  - `UserAccountRepository`
  - `RefreshTokenRepository`
  - `PasswordEncoder` (BCrypt)
  - `JwtEncoder`
  - `SecurityProperties` (issuer/TTLs/secret)
  - `TokenHasher`

Métodos importantes:
- **`login(email, password)`**
  - busca usuário por email (case-insensitive)
  - valida `enabled`
  - valida senha com `passwordEncoder.matches`
  - cria **access token** via `mintAccessToken(...)`
  - cria **refresh token** aleatório, salva apenas o **hash**
  - retorna `AuthTokens(accessToken, refreshToken, refreshTokenExpiresAt)`

- **`refresh(refreshTokenValue)`**
  - calcula hash do token recebido
  - busca `RefreshToken` por hash
  - valida não revogado e não expirado
  - valida usuário ainda existe e está enabled
  - **rotaciona** refresh token:
    - revoga o token atual (`revoke(now)`)
    - emite e persiste um novo refresh token
  - emite novo access token

- **`mintAccessToken(UserAccount, now)`**
  - cria JWT com:
    - `issuer`, `issuedAt`, `expiresAt`
    - `subject = userId`
    - claims: `email`, `roles`
  - retorna token assinado (HS256)

Boas práticas:
- **Rotação de refresh** reduz impacto de vazamento.
- `@Transactional` garante consistência ao revogar/criar tokens.
- Claims mínimas e úteis (`sub`, `email`, `roles`) para autorização.

---
#### `backend/src/main/java/com/fullstack/study/application/CurrentUser.java`
- **Função**: utilitário para acessar o usuário atual a partir do `SecurityContext`.
- Métodos importantes:
  - **`requireUserId()`**: retorna o `sub` do JWT como `UUID` (usa `JwtAuthenticationToken.getName()`).
  - **`hasRole(role)`**: verifica `authorities` (ex.: `"ROLE_ADMIN"`).

Boas práticas:
- Evita replicar parsing de JWT em cada service.
- Centraliza o acesso ao “ator” para aplicar regras de ownership/RBAC.

---
#### `backend/src/main/java/com/fullstack/study/application/ClientService.java`
- **Função**: regras de negócio para `Client` aplicando RBAC + ownership.
- Regras aplicadas:
  - `ROLE_ADMIN`: pode listar e acessar qualquer cliente.
  - `ROLE_USER`: lista apenas clientes de `ownerId = currentUser.requireUserId()`.
  - `ROLE_USER`: `get/update/delete` só permitido se `ownerId` for do usuário atual (senão `AccessDeniedException` → 403).
- Métodos:
  - `list()`, `get(id)`, `create(name, email, phone, document)`, `update(id, ...)`, `delete(id)`

---
#### `backend/src/main/java/com/fullstack/study/application/UserAdminService.java`
- **Função**: casos de uso administrativos para gerenciar contas de usuário (somente admin via controller).
- Regras aplicadas:
  - **Normalização de email**: `trim()` + `toLowerCase()`.
  - **Email duplicado**: `409 CONFLICT`.
  - **Roles vazias**: `400 BAD REQUEST`.
  - **Update (roles/enabled)** com proteção contra auto-bloqueio:
    - o admin **não pode desativar a própria conta**;
    - o admin **não pode remover `ROLE_ADMIN` de si mesmo**.
- Métodos:
  - `listAll()`, `get(id)`, `create(email, password, roles)`, `update(id, roles, enabled, actorId)`
### Camada Web (Controllers e DTOs)

#### `backend/src/main/java/com/fullstack/study/web/auth/AuthController.java`
- **Função**: expor endpoints HTTP de autenticação.
- Base path: `/api/v1/auth`

Endpoints e DTOs:
- **`POST /login`**
  - request: `LoginRequest(email, password)` com validação `@NotBlank`
  - response: `AuthResponse(accessToken, refreshToken, refreshTokenExpiresAt)`

- **`POST /refresh`**
  - request: `RefreshRequest(refreshToken)` com `@NotBlank`
  - response: mesmo `AuthResponse`

Boas práticas:
- DTOs como `record` (imutáveis, simples).
- Validação com Bean Validation (`@Valid`, `@NotBlank`, `@NotNull`).

---
#### `backend/src/main/java/com/fullstack/study/web/clients/ClientController.java`
- **Função**: expor CRUD de **clientes** em `/api/v1/clients`.
- Endpoints:
  - `GET /api/v1/clients` (lista conforme regras do `ClientService`)
  - `GET /api/v1/clients/{id}`
  - `POST /api/v1/clients`
  - `PUT /api/v1/clients/{id}`
  - `DELETE /api/v1/clients/{id}`
- DTOs:
  - `ClientUpsertRequest(name, email, phone, document)` com Bean Validation.
  - `ClientResponse(id, name, email, phone, document, ownerId, createdAt, updatedAt)`

---
#### `backend/src/main/java/com/fullstack/study/web/users/UserController.java`
- **Função**: endpoints admin de usuários em `/api/v1/users`.
- Segurança:
  - `@PreAuthorize("hasAuthority('ROLE_ADMIN')")` no controller (exige role admin para todos os endpoints).
- Endpoints:
  - `GET /api/v1/users` (lista por email asc)
  - `GET /api/v1/users/{id}`
  - `POST /api/v1/users` (cria usuário; valida roles; 409 em email duplicado)
  - `PATCH /api/v1/users/{id}` (atualiza `enabled` + `roles`; protege auto-bloqueio via `actorId`)
- DTOs:
  - `UserCreateRequest(email, password, roles)`
  - `UserUpdateRequest(enabled, roles)`
  - `UserResponse(id, email, enabled, roles, createdAt, updatedAt)`
## Migrações Flyway

#### `backend/src/main/resources/db/migration/V1__init.sql`

Cria o schema inicial:
- `users`
- `user_roles`
- `items` (+ índice em `owner_id`) — **legado**; removido na migration seguinte.

#### `backend/src/main/resources/db/migration/V2__clients_replace_items.sql`

- Remove `items` e cria `clients` (nome, email, telefone, documento, `owner_id`, timestamps) + índice em `owner_id`.

Boas práticas:
- Schema explícito por migration (evita “DDL automático” em produção).

---
## Configurações relevantes (não-Java, mas impactam o Java)

- `backend/src/main/resources/application.properties`
  - `spring.profiles.default=dev`
  - actuator exposto (health/info)
  - `spring.jpa.open-in-view=false` (boa prática para evitar queries no controller/view)

- `backend/src/main/resources/application-dev.properties`
  - Postgres local (pode ser sobrescrito por env `SPRING_DATASOURCE_*`)
  - Flyway ligado e apontando para `classpath:db/migration`
  - propriedades JWT `app.security.jwt.*` (dev defaults)

- `backend/src/test/resources/application.properties`
  - H2 in-memory em modo compatível com Postgres
  - `spring.flyway.enabled=false` para testes leves
  - JWT properties de teste para inicializar `JwtEncoder/JwtDecoder`

---
## Seed (somente dev) para destravar login

#### `backend/src/main/java/com/fullstack/study/config/DevSeedConfig.java`
- **Função**: garantir que exista um admin em ambiente `dev` para facilitar testes locais.
- Ativo apenas em: `@Profile("dev")`.
- Comportamento:
  - cria (ou atualiza) o usuário admin com:
    - email padrão: `admin@example.com` (ou `APP_SEED_ADMIN_EMAIL`)
    - senha padrão: `admin123` (ou `APP_SEED_ADMIN_PASSWORD`)
    - roles: `ROLE_ADMIN`
    - `enabled = true`

---
## Observações e próximos passos recomendados (coerentes com o plano)

- **Problem Details (RFC7807)**: padronizar erros HTTP (ex.: credenciais inválidas, validação, acesso negado) com um handler global.
- **Endpoints de admin (`/api/v1/users`)**: adicionar paginação/filtros (ex.: por email) caso a base cresça.
- **Clientes (`/api/v1/clients`)**: adicionar paginação e ordenação (principalmente na visão admin).
- **Cobertura >90%**:
  - já existem testes unitários para `UserAdminService`;
  - próximos candidatos: `AuthService` (cenários de refresh/revogação) e testes web (`@WebMvcTest`) para status codes/validação nos controllers.