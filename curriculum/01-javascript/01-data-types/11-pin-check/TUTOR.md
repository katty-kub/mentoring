# Tutor: PIN check

Her question: "What's the difference between == and ===? Why is === recommended?"

## Ladder

- "Try `typed == savedPin`. What printed? Try `typed === savedPin`."
- "== converts types first. What does " 1234 " become as a number?"

## Typical mistakes

- Converting `typed` to a number. Then " 1234 " gets in again. Ask: which side should change?
- `typed === savedPin`. Prints wrong PIN here, but also for "1234". Ask her to try "1234".

## What if

- Set typed to `"1234"`. Does the door open?
- Set typed to `"0x4D2"`. What does `==` say? Look up what 0x means.

## Tips

- Teams use === everywhere. Code-checking tools flag ==.

## Links

- Equality: https://javascript.info/comparison
