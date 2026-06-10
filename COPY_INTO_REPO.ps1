# Run this from inside the extracted scaffold folder.
# Replace the path below with your cloned repository path.
$RepoPath = "C:\path\to\your\github-username.github.io"

Copy-Item -Path ".\*" -Destination $RepoPath -Recurse -Force
Write-Host "Portfolio scaffold copied to $RepoPath"
Write-Host "Next:"
Write-Host "cd $RepoPath"
Write-Host "npm install"
Write-Host "npm run dev"
