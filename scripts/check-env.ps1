$ErrorActionPreference = "Stop"

$uJ = [Environment]::GetEnvironmentVariable("JAVA_HOME", "User")
$mJ = [Environment]::GetEnvironmentVariable("JAVA_HOME", "Machine")

Write-Host ("JAVA_HOME(User)   = " + $uJ)
Write-Host ("JAVA_HOME(Machine) = " + $mJ)
Write-Host ""

Write-Host "PATH(User) top entries:"
([Environment]::GetEnvironmentVariable("Path", "User") -split ";") | Select-Object -First 12 | ForEach-Object { Write-Host ("  " + $_) }
Write-Host ""

Write-Host "PATH(Machine) top entries:"
([Environment]::GetEnvironmentVariable("Path", "Machine") -split ";") | Select-Object -First 12 | ForEach-Object { Write-Host ("  " + $_) }
