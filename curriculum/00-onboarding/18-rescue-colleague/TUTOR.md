# Tutor: rescue colleague

Method: `../TUTOR.md`. Continues force-push. Trains R1 via cherry-pick and shows the real cost of `--force`.
Her question: "After a force push, how do you get a colleague's lost commit back?"

The colleague clone must be untouched since force-push. If she pulled there already, the commit is gone
from the branch: go straight to step 5.

## Ladder

- Prediction: "The colleague's clone still has the commit. What will `pull --rebase` replay on top of GitHub?"
  → "Which commits does git think are already on GitHub?"
- After the pull: "The commit is not in `git log`. Is it gone from the computer, or only from the branch?"
  → "Where did you write its SHA?"
- Cherry-pick: "Which task copied one commit onto another branch?" (cherry-pick)
  Skipped the optional practice in cherry-pick? This is her first one. Before step 6 she says what it will do,
  using her answers in `16-cherry-pick/task.js`. `--continue` works like `rebase --continue` from pull-conflict.
- Conflict: "Both commits changed the same line. Which fruit should stay?"
- Push: "Is the colleague's branch now ahead of GitHub, or diverged?"

## Typical mistakes

- Writes the SHA into a file in the colleague clone. `pull --rebase` refuses: "You have unstaged changes".
  Ask what git says and where the SHA should go.
- Resolves the conflict but forgets `git add` before `--continue`. Ask what `git status` suggests.
- Adds the wrong file: the conflict is in force-push's `task.js`. Ask which file `git status` lists.
- Runs `git push --force` in the colleague clone out of habit. Ask what `git status` says first.

## What if

- The colleague has no paper and no SHA. Where else is it written? (Next task: reflog.)
- The colleague had uncommitted work when they ran `pull --rebase`. What would git do?

## Tips

- The lost commit was never deleted: it lived in the colleague's reflog. Committed work is hard to lose.
- `pull --rebase` drops commits it thinks are already upstream. After a force push that guess is wrong.
- This is why teams block force push on shared branches (task protect-main).

## Links

- git cherry-pick: https://git-scm.com/docs/git-cherry-pick
- git pull (`--rebase`): https://git-scm.com/docs/git-pull
