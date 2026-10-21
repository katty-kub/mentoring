# Tutor: when git says no

Method: `../TUTOR.md` → When git says no. No new commands: only errors.
Her question: "What do you do when git shows an error you don't know?"

Expected errors (step → main line):

- 4: `no changes added to commit` (the file is changed, nothing staged)
- 5: `fatal: pathspec 'notes.txt' did not match any files`
- 6: `fatal: The current branch training/when-git-says-no has no upstream branch.`
- 7: `fatal: a branch named 'training/safe-start' already exists`

`git push` in step 6 just works? `push.autoSetupRemote` is on. Ask why it worked, skip it.
Step 7 works because she made `training/safe-start` in safe-start and never deletes branches.
Before step 7, ask if she cloned the repo again since safe-start. Yes? Skip step 7:
`git switch -c` would succeed and leave her on a stray branch.

## Ladder

- Each error: "Which word in it is the most important?" → "Is something lost, or did git just refuse?"
- Step 3: "Does `git switch -c` take your unsaved change along, or leave it on `main`?"
- Question 1: "Who could help you safely?" Don't name any fix command.
- Help message: "Could the tutor help you with only this message, without asking back?"

## Typical mistakes

- Wants git's suggestion in step 6 (`--set-upstream`): not in the list. Ask which listed command
  does the same (`git push -u origin <branch>`). Already ran it? No harm, it equals `-u`.
- Runs `git commit -a` from the hint in step 4: not in the list. Ask her to stage with a path.
- Commits on `main` in step 2. That is question 1 for real: stop, help message, rescue (`../TUTOR.md` → Stop).

## What if

- `git pull --ff-only` says `Not possible to fast-forward`. What do you do?

## Tips

- An error is git saying no. Usually nothing broke: read it before you do anything.
- Stopping is a skill. A blind fix can delete your work and other people's.
- A good help message: goal, last command, exact error, `git status`, PR link if there is one.

## Links

- Pull requests: https://docs.github.com/en/pull-requests
