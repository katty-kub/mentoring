# Tutor: keep secrets

Method: `../TUTOR.md`. New: `.gitignore`. The mentor added `.env` and `node_modules/` to it.
Her question: "What does `.gitignore` do, and what can't it do?"

## Ladder

- Lines: "Which file names would each line catch?"
  → "What does the `#` comment above each group say?" `.tasks/` is the mentor's workspace,
  the two Claude files are personal Claude settings, `.DS_Store` is macOS junk.
- `.env` vs `password.txt`: "Which of the two names is in `.gitignore`?"
- Already pushed (question 3): "Where is the file now? Only on your computer?"
  → "Does `.gitignore` change old commits?"
- Leak (question 4): "Who can read a public repo?" → "What makes a leaked password useless?"

## Typical mistakes

- The editor saves `.env` as `.env.txt`: git shows it. Ask for the exact file name.
- Creates the files in the task folder, not in root.
- Wants to add `password.txt` to `.gitignore`: not her job here. Delete it, don't commit it.

## What if

- You name the file `secrets.env`. Does git see it?

## Tips

- `.gitignore` only works for files git doesn't track yet.
- A leaked password: change it at once. Deleting the commit is not enough: the history keeps it.
- Always `git add` with a path: it never picks up a secret by accident.

## Links

- gitignore: https://git-scm.com/docs/gitignore
