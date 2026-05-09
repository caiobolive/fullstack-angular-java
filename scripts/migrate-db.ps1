# Aplica migrations Flyway (inclui V2: remove `items`, cria `clients`) sem subir o Spring Boot.
# Pré-requisito: Postgres acessível (ex.: Docker Compose em docker/ com .env).
#
# Uso (na raiz do repo ou de qualquer pasta):
#   powershell -ExecutionPolicy Bypass -File scripts/migrate-db.ps1

$ErrorActionPreference = "Stop"
$root = Split-Path -Parent (Split-Path -Parent $MyInvocation.MyCommand.Path)
$envFile = Join-Path $root "docker\.env"

if (Test-Path $envFile) {
  Get-Content $envFile | ForEach-Object {
    if ($_ -match '^\s*([^#][^=]*?)\s*=\s*(.*?)\s*$') {
      $k = $matches[1].Trim()
      $v = $matches[2].Trim()
      [Environment]::SetEnvironmentVariable($k, $v, "Process")
    }
  }
}

$db = if ($env:POSTGRES_DB) { $env:POSTGRES_DB } else { "fullstack_db" }
$user = if ($env:POSTGRES_USER) { $env:POSTGRES_USER } else { "fullstack_user" }
$pass = if ($env:POSTGRES_PASSWORD) { $env:POSTGRES_PASSWORD } else { "change_me" }
$url = "jdbc:postgresql://localhost:5432/$db"

Write-Host "Flyway migrate -> $url (user=$user)"
Set-Location (Join-Path $root "backend")
& .\mvnw.cmd flyway:migrate `
  "-Dflyway.url=$url" `
  "-Dflyway.user=$user" `
  "-Dflyway.password=$pass"
