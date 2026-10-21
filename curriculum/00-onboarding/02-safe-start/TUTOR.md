# Tutor: safe start

Method: `../TUTOR.md`. New: `git pull --ff-only`, `git log --oneline`.
Her question: "Why does every task start on a fresh `main` and a new branch?"

## Ladder

- Status first: "What happens to unsaved work when you switch branches?"
  → "What would `git status` have told you before?"
- `--ff-only`: "Your `main` has no commits of its own. What can git do with GitHub's new commits?"
  → "And if both had new commits?"
- Log: "Each line is one commit. What is the short code at its start for?"
- Clone and config: "What do you already have on this computer that you set up once?"

## Typical mistakes

- `git switch -c` before `git pull --ff-only`: the branch starts on an old `main`.
- Stuck in the `git log` pager. Ask how to leave it.
- Wrong folder: `pathspec did not match`. Ask where the terminal is.
- Can't find her commit: two count. `completed task (#14)` near the top (the squash),
  `first pull request` further down. Scroll with Space.

## What if

- You skip `git pull --ff-only` and someone changed `main` meanwhile. What happens to your PR?
- You run `git clone` again inside the repo. What do you get?

## Tips

- `git status` before every `switch`, `pull` and `commit`. It costs a second.
- `--ff-only` is a safety catch: git only moves `main` forward or says no.
- The short code in `git log --oneline` is the commit's SHA, its name.

## Links

- git pull: https://git-scm.com/docs/git-pull
- git log: https://git-scm.com/docs/git-log
