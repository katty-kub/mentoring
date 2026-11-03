# Tutor: Page title

Her question: "Where does the text in the browser tab come from?"

## Ladder

- "Open `src/app/layout.tsx`. Which line has `Next tasky`?"
- "Which file wraps every menu page? Layout-predict showed it."
- "The task shows one import line. Where does a type like `Metadata` go?"

## Typical mistakes

- Puts `metadata` into the task's `page.tsx`. Only `/12-page-title` changes. Ask her to open `/12-page-title/menu/42`.
- Puts it into both menu pages. Works. Ask: and a third menu page? Which task put one part in one place?
- Forgets `export`. Nothing changes, no error. Ask: how does Next find `metadata` in the file?
- Misspells `metadata`. Nothing changes, no error. Ask her to compare it with the root layout, letter by letter.

## What if

- `/12-page-title/menu/42` shows "Produkt 42 · Kavárna U Kocoura". Why can't a plain `const` know the 42?
- Put a different title into `menu/page.tsx` too. Which one wins on `/12-page-title/menu`? On `…/menu/42`?

## Tips

- `metadata` fills the page's `<head>`: title, description. Export it from `layout.tsx` or `page.tsx`.
- The file closest to the page wins: page over its layout, a layout over the root layout.

## Links

- Metadata: https://nextjs.org/docs/app/getting-started/metadata-and-og-images
- The metadata object: https://nextjs.org/docs/app/api-reference/functions/generate-metadata
