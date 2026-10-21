# Tutor: clean history

Method: `../TUTOR.md`. Fixes the mixed message styles on `main` with `rebase -i --root`. No mentor: you are her only guide.
You guide her the whole time. The rewrite runs in a second clone, `../mentoring-rewrite`, in a second terminal:
this folder and `.claude/` never change. Ask her to paste what the second terminal prints.
Her question: "What is a tag, and how is it different from a branch?"

The messages come from her table in `04-commit-strategy`. Never suggest a message for an old commit.
Her table ends at `e12e626`. A later commit that breaks `COMMITS.md`: she writes its message herself.
Ask as in commit-strategy: type, then scope, then description.
The todo list is in graph order, not her table's date order: the three `Restore starter task…` commits
come before `a8c9497`. Rows 18–19 show `# empty`: they stay, reword them like any other.

## Gate: no backup, no rewrite

Hard rule, never skip it, even if she is in a hurry:

- After step 3: she shows you the tag on GitHub (Tags page) or in `git ls-remote --tags origin`.
  No tag on GitHub → she doesn't go on to step 4.
- Before step 10: she runs `git ls-remote --tags origin` again and reads you the `backup/main-before-rewrite` line.
  Then she says: which branch, what gets lost, how back (the tag). Only then the force push.

## Ladder

- Tag: "A branch moves with every commit. What do you need before a risky rewrite: something that moves or not?"
- Todo list: "Which word at the start of the line tells git what to do with that commit?"
- New SHAs: "A SHA is computed from the message too. What happens to it when the message changes?"
- Push: "Why `practice/clean-history:main` and not just `git push`?"

## Typical mistakes

- Edits the message text in the todo list. Git ignores it. Ask: "Which word did you change?"
- Runs steps 6–10 in the first terminal: files and `.claude/` vanish mid-rebase, you lose the deny list.
  Ask her to run `git rebase --abort`, then `pwd` in each terminal.
- Writes the drawing into `task.js` here: step 11's `reset --hard` deletes it. Drawing goes in chat.
- Opens her table in `../mentoring-rewrite` mid-rebase: it is gone there. Step 7 names the first clone.
- Drops the `(#NN)` suffix. Ask: "How will someone find the PR for this commit now?"
- Forgets one clone in step 11. That clone's next `git pull` fails: diverged. Ask which clones exist.
- Lease rejected in step 10: someone merged into `main` during the rewrite. Nothing is lost.
  Ask: "Which commit is new on GitHub? Which task copied one commit onto another branch?" (cherry-pick)
  She cherry-picks that commit onto `practice/clean-history`, repeats the step 9 checks, then step 10.
  Never `rebase origin/main`: that brings the whole old history back.
- Step 1 shows a mentor's branch with an open PR. Leave it; the mentor rebases it after the rewrite.

## What if

- Someone merged a PR during your rewrite. What does `--force-with-lease` do?
- You made a mess mid-rebase. What brings everything back?
- After the push you see a wrong message. How do you get the old state back?

## Tips

- During the rewrite, files vanish and return in `../mentoring-rewrite`: the commits are replayed from the very
  first one. That is why the rewrite gets its own clone.
- GitHub loses the "Verified" badge on old web merges: she is the new committer.
- The tag keeps the old commits alive on GitHub. Teams tag releases the same way: `v1.0.0`.
- Rewriting a shared branch is rare and always announced. Normal days use `revert`.

## Links

- Rewriting history: https://git-scm.com/book/en/v2/Git-Tools-Rewriting-History
- Tagging: https://git-scm.com/book/en/v2/Git-Basics-Tagging
- git rebase: https://git-scm.com/docs/git-rebase
