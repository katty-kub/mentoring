# Tutor: protect main

Method: `../TUTOR.md`. Fixes the missing protection on `main`. She is the owner; the mentor can't do it.
Trains R5 (step 10). Step 9 is her first `push --force`, and the ruleset blocks it.
Her question: "What does a ruleset protect, and why does it apply to you too?"

## Scope

Before step 2, say it plainly: "Only in the `mentoring` repo. Not in your other repos yet."
If she opens another repo's Settings, stop her and say it again.

## Ladder

- Bypass list: "Without a ruleset anything goes straight to `main`. Should anyone be able to, by accident?"
- Rejection: "Read the push error. Which line comes from `remote:`?" → "Who wrote that line?"
- Step 10: "Which branch still has your commit after b)? What does `reset --hard` throw away?"

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
