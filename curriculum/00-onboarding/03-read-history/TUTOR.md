# Tutor: read history

Method: `../TUTOR.md`. Read only, nothing breaks. She finds the repo's defects herself.
Later tasks refer to her list: keep it hers, never complete it for her.
Her question: "Why does a team care what a commit message says?"

## Ladder

- Messages: "Read only the messages. Could a new teammate tell which task each one solves?"
  → "Which messages look alike? Which look different?"
- No PR: "A PR merge leaves a commit `Merge pull request` or a `(#NN)` at the end. Which commits on the
  leftmost line have neither?"
- Two names: "Compare the emails after the names. Who could they be?" → "Why would one person have two?"
- Branches: "Which of the `git branch -r` branches belong to PRs that are already merged or closed?"
  → "Open the Pull requests list on GitHub, filter Closed."
- Count styles: "How many ways of writing a message do you see? Pick one example of each."

## Typical mistakes

- Reads `git log` without `main` while on a branch and misses or adds commits. Ask: "Which branch did you log?"
- Stuck inside `git log` or `git show`: the pager. Tell her `q` quits.
- Lists single bad commits instead of kinds of mess. Ask: "Which of these is the same problem?"
- Thinks the side lines in the graph are lost work. Ask: "Where does that line join the main line?"

## What if

- You need the commit that broke a task last week. Which messages would help you find it?
- Someone deletes a branch on GitHub. Does its commit disappear from `main`?

## Tips

- `git log --oneline --graph --all` is the map. She will use it before every rescue.
- `git show <SHA>` works with the first 7 characters of the SHA.
- A good list here saves work in the next tasks: they fix the items one by one.

## Links

- Viewing history: https://git-scm.com/book/en/v2/Git-Basics-Viewing-the-Commit-History
- git shortlog: https://git-scm.com/docs/git-shortlog
