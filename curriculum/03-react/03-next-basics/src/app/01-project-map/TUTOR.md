# Tutor: Project map

Her question: "Which folder in a Next project is for what?"

## Ladder

- "Which folder holds the pages? Which one holds plain files, like pictures?"
- "Open `/logo.svg`. Which folder is the file in? Is that folder's name in the URL?"
- "Could a visitor download your `page.tsx` as a file? Would you want that?"
- "Which command made `node_modules/`? Which one made `.next/`?"

## Typical mistakes

- Runs the URLs first. Tips go in before she opens anything.
- Tips `/public/logo.svg` works. Ask: in `/logo.svg`, where is the word `public`?
- Tips `/src/app/…/page.tsx` shows the code. Ask: does the browser get your code, or the page it makes?
- Tips the tab icon comes from `public/`. Ask her to read the tree again: which picture is in `src/app`?
- Thinks she must fix or commit `.next/`. Ask her to run `git status`. Is it listed?

## What if

- Delete `.next/`, run `npm run dev` again. What comes back?
- Dev-Notes has no `public/` yet. Where would its logo go?

## Tips

- `src/app/`: code and routes. `public/`: files as they are, served from `/`, no `public` in the URL.
- `.next/` and `node_modules/`: tools write them. Never edit, never commit, safe to delete.
- Some names in `src/app` mean something to Next: `page.tsx`, `layout.tsx`, `icon.svg`.

## Links

- Project structure: https://nextjs.org/docs/app/getting-started/project-structure
- public folder: https://nextjs.org/docs/app/api-reference/file-conventions/public-folder
- src folder: https://nextjs.org/docs/app/api-reference/file-conventions/src-folder
- App icons: https://nextjs.org/docs/app/api-reference/file-conventions/metadata/app-icons
