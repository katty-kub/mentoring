# Tutor: revert merge

Method: `../TUTOR.md`. Trains R8: fix `main` with a new commit, no rewrite. Goal only, no steps for the fix.
Her question: "Why does revert beat reset + force push on a shared branch?"

## Ladder

- "`main` is protected. Which kind of change can still reach it?"
  → "Can a new commit undo an old one?"
- "Open the merged PR on GitHub and read the bottom of the page. Which button could help?"
- Concept: revert, plus the GitHub docs link below.
- Title: "What does `COMMITS.md` say about the type `revert`?"

## Typical mistakes

- Fixes the line by hand in a new PR. Works, but the link to the bad commit is lost. Ask:
  "From the log, how would someone know which commit you undid?"
- Keeps GitHub's default title `Revert "…"`. Ask her to compare it with `COMMITS.md`.
- No body `Reverts <sha>.`: squash with the title-only default drops it. Ask what COMMITS.md wants.
- Tries `reset --hard` + force push: rejected by the ruleset. Ask what the error says.
- Checks `Hotovo, když` without fetching: `origin/main` still shows the bad commit.
  Ask: "When did your clone last ask GitHub?"

## What if

- The change was right after all. How do you bring it back?
- You squash-merge the same branch again. Does the change come back?
- On the command line, which command does what the button did?

## Tips

- `git revert <sha>` makes the same commit locally. A squash commit has one parent, so no extra flags.
- A revert is honest history: the mistake and the fix are both visible, and both can be undone.
- Clean history = every commit has a good message and went through a PR. Not "no mistakes ever".

## Links

- Reverting a PR: https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/reverting-a-pull-request
- git revert: https://git-scm.com/docs/git-revert
