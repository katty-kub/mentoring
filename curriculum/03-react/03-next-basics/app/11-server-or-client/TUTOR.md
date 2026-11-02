# Tutor: Server or client

Her question: "What makes a component a client component?"

## Ladder

- "Which components react to a click or typing? Which only show data?"
- "Where can `readFileSync` read a file: on the server, or in a visitor's browser?"
- "In the docs section, read the two lists. Which list fits B?"

## Typical mistakes

- Tips everything client "to be safe". Ask: what does the visitor's browser have to download then?
- Tips D client because of `map`. Ask: does a list need the browser to change it?
- Tips C server: no `useState`. Ask: who calls `onChange`, and where?
- Tips E client. Ask: does a visitor's browser have `hours.txt`?

## What if

- E and B on one page. How do they work together?
- A gets an `onClick`. Does it change?

## Tips

- Server is the default. Client only for state, effects, event handlers, browser APIs.
- Server components can read files and secrets. They never reach the browser.

## Links

- When to use Server and Client Components: https://nextjs.org/docs/app/getting-started/server-and-client-components#when-to-use-server-and-client-components
- use client: https://nextjs.org/docs/app/api-reference/directives/use-client
