ALTER TABLE clients RENAME TO customers;
ALTER INDEX idx_clients_owner_id RENAME TO idx_customers_owner_id;
