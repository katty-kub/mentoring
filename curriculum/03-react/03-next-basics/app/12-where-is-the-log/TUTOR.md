# Tutor: Where is the log

Her question: "Where does a server component run, and where does a client component run?"

## Ladder

- "Which of the three files starts with `\"use client\"`?"
- "Look at F12. Which logs have the Server label? Which do not?"
- "`log: Counter` is in the terminal too. Who made the first HTML of the page?"

## Typical mistakes

- Runs it first. Tips go in before she opens the page.
- Says Page ran in the browser: it is in F12. Ask her to look at the Server label.
  In dev, Next copies server logs into F12 with that label. The code still ran on the server.
- Tips Counter: browser only. Ask her to look at the terminal again. Client components also
  render once on the server, for the first HTML.
- Counter twice in F12. That is StrictMode in dev (React basics, tutor note). Not a bug.

## What if

- Click Líbí. Where do new logs show up? Why only there?
- Run `npm run build`. Which logs show up during the build? Why?

## Tips

- Server component: runs only on the server. Client component: on the server first, then in the browser.
- The Server label in F12 is a dev helper. In production, server logs stay on the server.

## Links

- Server and Client Components: https://nextjs.org/docs/app/getting-started/server-and-client-components
