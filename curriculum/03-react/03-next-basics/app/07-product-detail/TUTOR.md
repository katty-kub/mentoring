# Tutor: Product detail

Her question: "How does one file serve every product page?"

## Ladder

- "In dynamic-predict, which folder made `/menu/42` and `/menu/espresso` work?"
- "The example uses `slug`. What is the name of your part of the URL?"
- "Where does `42` come from on the page? Which line reads it?"

## Typical mistakes

- Folder `menu/id` without brackets. Ask her to open `/07-product-detail/menu/42`.
- Folder `[id]` but code reads `slug`. Page shows "Produkt " with nothing. Ask: which name did you give?
- Forgets `await`. `npx tsc`: `Property 'id' does not exist on type 'Promise<…>'`. Read it with her.
- Writes one page per product. Ask: and the menu gets 50 products?

## What if

- Show "Produkt 42 (sudé)" for even ids.
- What does `/07-product-detail/menu/abc` show? Is that fine for a shop?

## Tips

- One dynamic folder = many pages. Its name is the key in `params`.

## Links

- Dynamic routes: https://nextjs.org/docs/app/api-reference/file-conventions/dynamic-routes
