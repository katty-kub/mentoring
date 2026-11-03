# Tutor: Dynamic predict

Her question: "What does `[id]` in a folder name mean?"

## Ladder

- "Read `menu/[id]/page.tsx`. Where does the number on the page come from?"
- "`[id]` is not a real name. What could it stand for?"
- "How many URL parts after `menu` does `[id]` take?"

## Typical mistakes

- Runs the URLs first. Tips go in before she opens anything.
- Tips `espresso` gives 404: thinks `id` means a number. Ask: does a folder name know types?
- Tips `/menu` shows a list. Ask: is there a `page.tsx` directly in `menu`?
- Tips `/menu/1/2` shows "Produkt 1". Ask: how many `/` parts does the folder tree have?

## What if

- Rename the folder to `[slug]`. What else must change?
- Add `menu/page.tsx`. Which URL changes?

## Tips

- `[id]` = one URL part, any text. The value comes in `params`, always as a string.
- In Next 15+, `params` is a Promise: `await` it first.

## Links

- Dynamic routes: https://nextjs.org/docs/app/api-reference/file-conventions/dynamic-routes
