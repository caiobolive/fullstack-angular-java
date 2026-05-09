DROP TABLE IF EXISTS items;

CREATE TABLE clients (
  id UUID PRIMARY KEY,
  name VARCHAR(200) NOT NULL,
  email VARCHAR(320) NOT NULL,
  phone VARCHAR(30) NOT NULL,
  document VARCHAR(18) NOT NULL,
  owner_id UUID NOT NULL,
  created_at TIMESTAMPTZ NOT NULL,
  updated_at TIMESTAMPTZ NOT NULL
);

CREATE INDEX idx_clients_owner_id ON clients (owner_id);
