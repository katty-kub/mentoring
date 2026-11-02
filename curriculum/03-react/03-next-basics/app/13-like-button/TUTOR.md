# Tutor: Like button

Her question: "How do you add interactivity to a server page?"

## Ladder

- "Which part of this page needs the browser: the name, the price, or the button?"
- "In where-is-the-log, which file had `\"use client\"`? How did the page use it?"
- "Could the button live in its own file?"

## Typical mistakes

- Writes `useState` straight into `page.tsx`. Next shows: `You're importing a module that depends
  on useState into a React Server Component module`. Ask her to read the error's last sentence.
- Puts `"use client"` on `page.tsx`. Works. Ask: which parts of the page go to the browser now?
- New file without `"use client"`. Same error as above. Ask: which file uses `useState` now?
- Forgets `export default` or the import. Read the error with her.

## What if

- Pass the product name to the button as a prop: "Líbí se ti Matcha latte: 2".
- Put two buttons on the page. Do they share the count?

## Tips

- Keep pages on the server. Cut out the small interactive part as a client component.
- `"use client"` marks a border: that file and what it imports go to the browser.

## Links

- Using Client Components: https://nextjs.org/docs/app/getting-started/server-and-client-components#using-client-components
- use client: https://nextjs.org/docs/app/api-reference/directives/use-client
