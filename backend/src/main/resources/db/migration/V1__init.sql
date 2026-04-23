create table users (
  id uuid primary key,
  email varchar(320) not null unique,
  password_hash varchar(255) not null,
  enabled boolean not null,
  created_at timestamptz not null,
  updated_at timestamptz not null
);

create table user_roles (
  user_id uuid not null references users(id) on delete cascade,
  role varchar(50) not null,
  primary key (user_id, role)
);

create table items (
  id uuid primary key,
  name varchar(200) not null,
  description varchar(2000),
  owner_id uuid not null,
  created_at timestamptz not null,
  updated_at timestamptz not null
);

create index idx_items_owner_id on items(owner_id);

create table refresh_tokens (
  id uuid primary key,
  user_id uuid not null references users(id) on delete cascade,
  token_hash varchar(128) not null unique,
  created_at timestamptz not null,
  expires_at timestamptz not null,
  revoked_at timestamptz null
);

create index idx_refresh_tokens_user_id on refresh_tokens(user_id);
create index idx_refresh_tokens_expires_at on refresh_tokens(expires_at);

