# Tutor: git config

Method: `../TUTOR.md`. Fixes the two identities going forward and on GitHub.
Her question: "Why does git need your email? Why the noreply one?"

## Ladder

- Identity: "Two people commit as `Katka` with two emails. What does GitHub show?"
  → "How could GitHub know both are you?"
- `pull.ff only`: "What should `git pull` do when your branch and GitHub's branch both have new commits?"
  → "Would you rather git decide alone, or stop and tell you?"
- Editor: "The terminal stopped. What is it waiting for?"

## Typical mistakes

- Name or email without quotes, or with the `< >` from the step. Ask her to run `git config user.email`.
- `code: command not found`. Step 6 covers it.
- `cannot lock ref` / `onboarding` exists: the old ref is still local. Ask her to run step 2 again.
  (On GitHub the mentor renamed it to `onboarding-pr`.)
- Editor tab saved but not closed: the terminal still waits.
- `git branch -D onboarding` while on `onboarding`: git refuses. Ask: "Which branch are you on?"
- Default merge button (merge commit) instead of squash. Ask her to read the button text before clicking.

## What if

- You commit without `-m` and close the tab without writing anything. What does git do?
- You set `user.email` without `--global`. Where does it apply?

## Tips

- `git config --list --show-origin` shows which file each setting comes from.
- The noreply address keeps her private email out of a public repo.
- Old commits with the yahoo email get her avatar once GitHub knows that email.

## Links

- First-time setup: https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup
- Commit email: https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-email-preferences/setting-your-commit-email-address
