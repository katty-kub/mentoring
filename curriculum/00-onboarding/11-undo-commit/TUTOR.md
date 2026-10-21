# Tutor: undo commit

Method: `../TUTOR.md`. Trains R4 three times. Fixes the mentor's two identities in git output.
Her question: "How do you fix your last commit, and why only before push?"

## Ladder

- `.mailmap`: "What did you write in `.mailmap` in task stage-and-diff? Which part is the proper identity?"
  → "Which part tells git the email to replace?"
- Amend: "What does `--amend` replace: the files, the message, or the whole commit?"
- Forgot a file: "How do you put one more file into the commit you just made, without a new message?"
- Too early: "You want the commit gone, but your work staged. Which reset mode from the steps keeps that?"

## Typical mistakes

- Two lines in `.mailmap` for the mentor, each mapping to itself. `shortlog` still shows two. Ask her to read
  the `.mailmap` docs example with one name and two emails.
- Closes the VS Code tab without saving in step 4: the old message stays. Ask what `git log` shows.
- `git commit --amend` in step 5 without `--no-edit`: the editor opens. Not wrong. Ask what `--no-edit` skips.
- `git reset HEAD~1` without `--soft`: the change is unstaged. Ask what `git status` shows in red.

## What if

- The bad commit is already pushed. What does `git push` say after your amend? (task rebase-on-main)
- You amend on a branch a colleague also uses. What happens to them? (task force-push)

## Tips

- `git show --stat HEAD` lists the files in the last commit.
- Amend makes a new commit with a new SHA. The old one is still in the reflog for a while.
- Habit: read `git log --oneline -1` before every push.
- Start/Konec: `README.md` → Onboarding. From this task on she does them without steps.

## Links

- Undoing things: https://git-scm.com/book/en/v2/Git-Basics-Undoing-Things
- .mailmap: https://git-scm.com/docs/gitmailmap
