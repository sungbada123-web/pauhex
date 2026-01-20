
# Check if git is available
if (Get-Command git -ErrorAction SilentlyContinue) {
    Write-Host "Initializing Git repository..."
    if (-not (Test-Path .git)) { 
        git init 
    }

    Write-Host "Adding files..."
    git add .

    Write-Host "Committing changes..."
    git commit -m "Initial upload: Pauhex website release"

    Write-Host "Renaming branch to main..."
    git branch -M main

    Write-Host "Adding remote origin..."
    # Check if remote origin already exists
    $remotes = git remote
    if ($remotes -notcontains "origin") {
        git remote add origin https://github.com/sungbada123-web/pauhex.git
    } else {
        Write-Host "Remote origin already exists. Skipping add."
    }

    Write-Host "Pushing to GitHub..."
    git push -u origin main
} else {
    Write-Error "Git is not installed or not in the system PATH."
}
