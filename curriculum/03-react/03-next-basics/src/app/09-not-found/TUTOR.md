# Tutor: Not found

Her question: "How do you show a 404 page for data that does not exist?"

## Ladder

- "What does `products.find` give for id 999? Try it in `node`."
- "Should this page say 200 OK? What does F12 → Network show now?"
- "The task gives one import. Which file could show the text, next to the page?"

## Typical mistakes

- Returns `<h1>Produkt neexistuje</h1>` straight away. Text is right, status is 200. Ask her to check Network.
- Calls `notFound()` but no `not-found.tsx`. Page shows Next's default 404. Ask: whose text is that?
- Calls `notFound()` for every id. Ask her to open `/menu/1` again.
- Keeps `product?.name`. Ask: after the check, can `product` still be missing?

## What if

- Put `not-found.tsx` one folder higher. Does it still work?
- What should search engines see for `/menu/999`: 200 or 404? Why?

## Tips

- Missing data → `notFound()`. The user sees a page, the browser gets 404.
- After `if (!product)`, TypeScript knows `product` is there. Narrowing from ts-basics.

## Links

- notFound: https://nextjs.org/docs/app/api-reference/functions/not-found
- not-found.tsx: https://nextjs.org/docs/app/api-reference/file-conventions/not-found
