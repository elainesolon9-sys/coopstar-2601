# Script para conectar e publicar o repositório no GitHub
# Desenvolvido por: Antigravity (Arquiteto de Software/DevOps)

Write-Host "Iniciando processo de publicação no GitHub..." -ForegroundColor Cyan

# 1. Renomear branch para main (padrão moderno)
git branch -M main

# 2. Adicionar o repositório remoto
$remoteUrl = "https://github.com/elainesolon9-sys/coopstar-2601.git"
if (git remote) {
    git remote set-url origin $remoteUrl
} else {
    git remote add origin $remoteUrl
}

Write-Host "Remoto configurado para: $remoteUrl" -ForegroundColor Green

# 3. Instruções para o Push
Write-Host "`nPara finalizar a publicação, execute o comando abaixo no terminal:" -ForegroundColor Yellow
Write-Host "git push -u origin main" -ForegroundColor White

Write-Host "`nCertifique-se de que você está logado no GitHub via Git CLI ou que possui uma chave SSH configurada." -ForegroundColor Gray
