# CLAUDE.md - Project Instructions

## Safety Rules

### NEVER execute these commands without explicit user approval:
- `git push --force` / `git push -f` — Force push interdit
- `git reset --hard` — Reset destructif interdit
- `git clean -f` — Nettoyage destructif interdit
- `git branch -D` — Suppression forcee de branche interdite
- `rm -rf` / `rm -fr` — Suppression recursive forcee interdite
- `drop`, `truncate` — Operations destructives sur bases de donnees interdites
- `kill -9`, `pkill`, `taskkill /f` — Arret force de processus interdit

### Allowed without asking:
- Reading, writing, and editing files
- Running dev scripts (npm run, yarn, pnpm, bun)
- Installing dependencies (npm install, npm ci)
- Git operations: status, diff, log, add, commit, pull, fetch, stash, checkout, branch, merge, rebase
- File operations: ls, mkdir, cp, mv
- Linting and formatting (eslint, prettier, tsc)
- GitHub CLI (gh pr, gh issue)

## Language
- Respond in French when the user writes in French
