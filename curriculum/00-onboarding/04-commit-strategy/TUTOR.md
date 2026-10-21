# Tutor: commit strategy

Method: `../TUTOR.md`. Her table is her plan for `clean-history`. Never write or confirm a whole row for her.
Ask about one part at a time: type, then scope, then description.
Her question: "What should a commit message contain, and why?"

## Ladder

- Why history: "A bug appeared last week. How would you find the commit that caused it?"
  → "You want to undo one change, not all. What must you know about each commit?"
- Type: "Did this commit add something new, fix something, or only tidy?" → "Which row in COMMITS.md fits?"
- Scope: "Which folder do the files in `git show --stat` live in?" → "Which scope in COMMITS.md names it?"
- Description: "Finish the sentence: If applied, this commit will …"
- Unclear commit: "What did the files look like before? `git show <SHA>` shows the red and green lines."

## Typical mistakes

- Past tense (`solved`, `added`). Ask her to finish "If applied, this commit will …".
- Czech description. Ask what COMMITS.md says about the language.
- Capital letter or a period at the end. Ask her to compare with the examples.
- Drops the `(#NN)`. Ask: "How would someone find the PR from this commit?"
- Scope = file name (`task.js`). Ask which scopes COMMITS.md lists.
- Guesses from the old message without `git show`. Ask what the commit really changed.
- Rows 18 and 19 (`#15`, `#14`) list no files: empty commits, #16 brought their changes first.
  Ask: "Which task did the PR on GitHub solve? Where else did that change land?"
- Row 16 (`#16`) solved three tasks: naming all three breaks the 72-character limit.
  Ask what `COMMITS.md` says when the first line is too long.

## What if

- One commit solved two tasks. How does COMMITS.md say to write it?
- A commit only restored an old file. Is that `feat`, `fix` or `chore`? Why?

## Tips

- Teams often check messages automatically. A bad message stops the merge.
- "If applied, this commit will …" is the test for every description.

## Links

- Conventional Commits: https://www.conventionalcommits.org/en/v1.0.0/
- How to write a commit message: https://cbea.ms/git-commit/
- git show: https://git-scm.com/docs/git-show
