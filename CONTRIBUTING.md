# How we work on this repo

## Branches

- `main` is protected. Nobody pushes to it directly.
- One branch per task. Start from the latest main:
  git checkout main
  git pull
  git checkout -b feature/task-name
- Names: `feature/...` for new things, `fix/...` for bugs.
- Never mix two tasks in one branch.
- Nobody edits another person's branch without saying so in the group first.

## Commits

- Small and often. Say what changed: "Add lightbox arrow keys", not "update".
- Never commit `.env`, passwords or keys.

## Pull requests

- Push your branch and open a PR into `main`.
- Write 2 or 3 lines on what changed and why. Add a screenshot for visual changes.
- Keep PRs small enough to read in about 10 minutes.
- Link the task: "Closes #12" (the issue number).
- Ila reviews. Answer comments and push fixes to the same branch.
- After the merge, delete the branch and run `git checkout main` then `git pull`.

## Before you open a PR

- [ ] It runs with `npm run dev` and has no red errors in the console
- [ ] Any new text has English and Tamil versions
- [ ] No keys or `.env` content in the diff
- [ ] Works at 360px wide

## Stuck?

Ask in the group after 30 minutes. Share a screenshot and what you tried.
