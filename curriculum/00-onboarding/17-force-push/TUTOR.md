# Tutor: force push

Method: `../TUTOR.md`. Trains `push --force` vs `--force-with-lease`, R4 (amend), R6. The rescue is the next task.
Her question: "Why is `--force-with-lease` safer than `--force`, and when is even the lease not safe?"

## Ladder

- Plain push rejected: "Read the `hint:` lines. What does GitHub have that you don't?"
- Lease rejected: "Your clone last saw the branch at some commit. Where is it on GitHub now?"
  → "What would your push do to the commit you never saw?"
- After `--force`: "Open the branch's commits on GitHub. Whose work is missing? Did anyone get a warning?"
- Fetch trap (question 2): "After a fetch, what does your clone think GitHub has?"
  → "Did you read that commit before pushing over it?"

## Typical mistakes

- Runs `git fetch` before step 7. Then the lease passes. Ask what she ran and why the lease agreed.
  VS Code auto-fetch does the same; the repo's `.vscode/settings.json` turns it off. Don't let her enable it.
- Mixes up the two terminals. Ask her to run `git config user.name` in each.
- `git commit --amend --no-edit`: the message still says `banana` on a `kiwi` change. Ask her to read
  `git log --oneline -1`.
- Pulls in the colleague clone after step 7. That is the next task. Ask her to stop and leave it.

## What if

- The colleague had not pushed yet, only committed. Would `--force` hurt them?
- Ten people work on `main`. Someone runs `git push --force`. Who notices, and when?

## Tips

- `--force-with-lease` is only as good as your last look. Fetch, read `git log`, then push.
- Rule: `--force` never. `--force-with-lease` only on your own branch.

## Links

- git push (`--force-with-lease`): https://git-scm.com/docs/git-push
- Remote branches: https://git-scm.com/book/en/v2/Git-Branching-Remote-Branches
