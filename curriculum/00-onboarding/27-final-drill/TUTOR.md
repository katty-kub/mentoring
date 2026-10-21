# Tutor: final drill

Method: `../TUTOR.md`. Capstone: three rescues without steps. Higher bar for hints:
before each rung, ask which earlier task had this situation.
Her question: "When something breaks in git, what do you do first?"

## Picking the three states

You don't remember earlier sessions. Ask her which three of R1–R7 felt hardest, and read her answers in the
earlier `task.js` files. Default: R1, R6, R7. Give her only the break commands.
Never say the situation's name or the fix. Break recipes, on `practice/final`:

- R1: a second branch from `main` and hers change the fruit line differently, both committed.
- R2: start that merge or a `git rebase main`, then ask her to stop halfway and get back.
- R3: change the fruit line, `git add <soubor>`, change it again.
- R4: commit with the message `asdf`, not pushed.
- R5: switch to `main`, change the fruit line, commit.
- R6: push `practice/final`; the colleague clone commits and pushes; she commits and pushes.
- R7: two commits, then `git reset --hard HEAD~2`.

## Ladder

- "What do `git status` and `git log --oneline --graph --all` say? Name it."
- "Which earlier task had this? What did you do there?"
- Then the rung from that task's `TUTOR.md`.

## Typical mistakes

- Fixes before naming the situation. Stop her: R0 first.
- Cleanup: deletes `practice/*` on GitHub but not locally, or the other way. Ask what `git branch -a` shows.
- Remote branches still listed after deleting on GitHub. Ask what `git fetch --prune` does.

## What if

- Which of your three fixes could have lost work for good if done in a different order?

## Tips

- Next: the module's `SUMMARY.md` (see `ROADMAP.md`): situation → command → what gets lost.
- Every later module starts with one rescue warm-up. These skills stay fresh that way.

## Links

- Undoing things: https://git-scm.com/book/en/v2/Git-Basics-Undoing-Things
- Remote branches: https://git-scm.com/book/en/v2/Git-Branching-Remote-Branches
