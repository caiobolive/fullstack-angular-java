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
- **Teste não depende de Postgres** (config de test com H2 + Flyway desabilitado).

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
- **`SecurityFilterChain securityFilterChain(HttpSecurity)`**
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

Boas práticas:
- Validação de `issuer` evita aceitar tokens de “outra aplicação”.
- Config stateless e endpoints públicos explícitos.

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

#### `backend/src/main/java/com/fullstack/study/domain/Item.java`
- **Função**: entidade de exemplo para CRUD.
- Tabela: `items`
- Campos:
  - `id` (UUID)
  - `name`, `description`
  - `ownerId` (UUID do dono — base para regras de “ownership” mais tarde)
  - `createdAt`, `updatedAt`

Métodos importantes:
- `setName(...)`, `setDescription(...)` atualizam `updatedAt`.

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

#### `backend/src/main/java/com/fullstack/study/infrastructure/ItemRepository.java`
- **Função**: CRUD de `Item` (no futuro: paginação, filtros, busca por owner).

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

## Migrações Flyway

#### `backend/src/main/resources/db/migration/V1__init.sql`
Cria o schema inicial:
- `users`
- `user_roles`
- `items` (+ índice em `owner_id`)
- `refresh_tokens` (+ índices em `user_id` e `expires_at`)

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

## Observações e próximos passos recomendados (coerentes com o plano)

- **CORS**: adicionar config dedicada (permitir apenas origem do frontend em dev).
- **Problem Details (RFC7807)**: padronizar erros HTTP (ex.: credenciais inválidas, validação).
- **CRUD `items`**: controllers + DTOs + regras RBAC (`ROLE_ADMIN`/`ROLE_USER`) e ownership.
- **Seed de usuário admin (dev)**: criar um initializer opcional (somente em dev) para conseguir logar.
- **Cobertura >90%**: começar a cobrir `AuthService` e `SecurityConfig` com testes unitários/slice tests.

