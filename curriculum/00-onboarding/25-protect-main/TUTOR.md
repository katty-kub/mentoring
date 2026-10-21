# Tutor: protect main

Method: `../TUTOR.md`. Fixes the missing protection on `main`. She is the owner; the mentor can't do it.
Her question: "What does a ruleset protect, and why does it apply to you too?"

## Ladder

- Bypass list: "In bad-merge you could rewrite `main`. Would you want to be able to do that by accident?"
- Rejection: "Read the push error. Which line comes from `remote:`?" → "Who wrote that line?"
- Step 10: "Which task had a commit on the wrong branch? What did you do there?"

## Typical mistakes

- Skips the step 7 check and the push passes: a commit is on `main`. Stop. She opens a revert PR right away
  (GitHub's Revert button, as in task revert-merge), then fixes the ruleset.
- No target added: the ruleset applies to no branch. Ask what "Target branches" lists.
- Step 10: `reset --hard origin/main` before the new branch. Her predictions are gone. Ask for reflog.
- Adds herself to the bypass list "to be safe". Ask question 2 again.

## What if

- You need to fix `main` fast and the rule blocks you. What is the right way? (Next task.)
- A colleague opens a PR. With 0 approvals, who can merge it?

## Tips

- GitHub labels change sometimes. If one is missing, compare with the docs links below.
- Rulesets work on public repos on the free plan.
- Teams usually also require 1 approval. Here 0 is enough: the PR itself is the habit.

## Links

- Creating rulesets: https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/creating-rulesets-for-a-repository
- Available rules: https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/available-rules-for-rulesets
