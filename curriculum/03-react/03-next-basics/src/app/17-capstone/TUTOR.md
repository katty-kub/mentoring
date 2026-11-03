# Tutor: Capstone

Her question: "How do you plan the files of a small Next app?"

This is a small Dev-Notes: same idea as its `/[notebook]` pages, inside the task folder.

## Ladder

- "Write the URLs from the task. Which folder and file does each need?"
- "Which part is on every page? Which file from earlier tasks does that?"
- "Where does `devnotes.svg` live? Which URL did `public/` files get in project-map?"
- "Which part needs the browser? Which task did that?"
- "Which URL can get a notebook that does not exist? Which task handled that?"

## Typical mistakes

- Starts coding before the file plan. Ask her to write the tree as comments first.
- Folder `[id]` but code reads another name. Ask: which name did the folder give?
- Header with `<a>`. Ask: did the task say anything about reloading?
- Header copied into every page. Ask: what did shared-header teach?
- `src="/public/devnotes.svg"`. Ask her to open that URL.
- Whole notebook page `"use client"`. Ask: which part needs the browser?
- Wrong import path to `_data/notebooks`. Ask her to count folders.
- Unknown notebook shows an empty page. Ask her to check Network for 404.

## What if

- Show the number of clusters: "3 okruhy". Server or client?
- In Dev-Notes, the URL is `/api`, not `/notebooks/api`. Which folder would move?

## Tips

- Plan the folder tree first. URLs → folders, shared parts → layouts, clicks → small client parts.
- Pictures and files as they are → `public/`. Everything with code → `src/app`.

## Links

- Layouts and pages: https://nextjs.org/docs/app/getting-started/layouts-and-pages
- Images: https://nextjs.org/docs/app/getting-started/images
- Server and Client Components: https://nextjs.org/docs/app/getting-started/server-and-client-components
