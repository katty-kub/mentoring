# Tutor: bad merge

Method: `../TUTOR.md`. The wrong way on purpose: `reset --hard` + force push on `main`. No mentor: you are her only guide.
Her question: "Why is force pushing a shared branch dangerous, even when it works?"

## Gate: no backup, no reset

Hard rule, never skip it, even if she is in a hurry:

- After step 2: she shows you the tag on GitHub (Tags page) or in `git ls-remote --tags origin`.
  No tag on GitHub → she doesn't go on to step 3.
- Before step 6: she runs `git ls-remote --tags origin` again and reads you the `backup/before-bad-merge` line.
  Then she says: which branch, what gets lost, how back (the tag). Only then the reset and the force push.

## Ladder

- Before step 6: "Which branch? What gets lost? How do you get back?" Wait for all three.
- Step 7: "Git says the colleague is ahead by 1. Which commit is that?"
  → "What would a plain `git push` from the colleague do to `main`?"
- Ten colleagues: "Each one has the bad commit. How many of them must know what you did?"
- Password: "The commit is still in the closed PR. Who can still read it?"

## Debrief

After step 10, before the questions. Not ideal, but sometimes right. Let her find both sides:

- Not ideal: "Who else has the bad commit now? Who tells them?" Others must reset; their work can be lost.
  The commit stays in the closed PR. One typo in the tag and there is no way back.
- Sometimes fine: "When would nobody get hurt?" She works alone in the repo, nobody pulled yet,
  and a backup tag is on GitHub. Then the history stays clean.
- Otherwise revert (task revert-merge). Next task: protect `main` so this can't happen by accident.

## Typical mistakes

- Runs `node task.js` before merging: sees the crash and fixes it. Fine; ask her to break it again for step 3.
- Step 4 says `already exists`: the colleague folder is left from an earlier try. Skip the clone, do the rest.
- Mixes up the two terminals. Ask her to run `git config user.name` in each.
- Runs step 7's `git push` from the colleague clone. The bad commit is back on `main`. Repeat step 6.
- Plain `git push` in step 6: rejected. Ask what the error says about history.
- Skips step 8. The colleague clone keeps the bad commit and breaks the next tasks.

## What if

- The colleague had made a good commit on top of the bad one. What happens to it in step 8?
- You forgot the tag. How would you find the old `main` now?

## Tips

- After a force push, everyone else must notice and reset. Nothing tells them.
- A secret pushed once is leaked. Change the password; deleting the commit doesn't help.
- The next task makes this impossible on `main`. The task after it shows the right way.

## Links

- git push (`--force-with-lease`): https://git-scm.com/docs/git-push
- Reset demystified: https://git-scm.com/book/en/v2/Git-Tools-Reset-Demystified
- Sensitive data: https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository
