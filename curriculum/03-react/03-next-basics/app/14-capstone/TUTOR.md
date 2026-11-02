# Tutor: Capstone

Her question: "How do you plan the files of a small Next app?"

## Ladder

- "Write the URLs from the task. Which folder and file does each need?"
- "Which part is on every page? Which file from earlier tasks does that?"
- "Which part needs the browser? Which task did that?"
- "Which URL can get an id that does not exist? Which task handled that?"

## Typical mistakes

- Starts coding before the file plan. Ask her to write the tree as comments first.
- Nav with `<a>`. Ask: did the task say anything about reloading?
- Nav copied into every page. Ask: what did shared-header teach?
- Whole detail page `"use client"`. Ask: which part needs the browser?
- Wrong import path to `_data/menu`. Ask her to count folders.
- Unknown id shows an empty page. Ask her to check Network for 404.

## What if

- Add `/14-capstone/about`. How many files?
- Mark sold-out items in the menu. Server or client?

## Tips

- Plan the folder tree first. URLs → folders, shared parts → layouts, clicks → small client parts.

## Links

- Layouts and pages: https://nextjs.org/docs/app/getting-started/layouts-and-pages
- Server and Client Components: https://nextjs.org/docs/app/getting-started/server-and-client-components
