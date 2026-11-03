# Tutor: Route predict

Her question: "How does Next turn folders into URLs?"

## Ladder

- "Which file did Next use for `/02-route-predict/menu`? What is its name?"
- "Look at every file called `page.tsx`. Which folders do they sit in?"
- "Some folder names have `( )` or `_`. Did those names show up in a URL?"

## Typical mistakes

- Runs the URLs first. Tips go in before she opens anything.
- Tips `/about` works: `index.tsx` is a page in many other tools. Ask: what is the name of a page here?
- Tips `/menu/drinks` works because the folder exists. Ask: is there a `page.tsx` inside?
- Tips `/shop/cart`. Ask: did the `(shop)` part ever appear in the build table?
- Doesn't run `npm run build`. Ask her to read the `Route (app)` table: it is the full list.

## What if

- Rename `about/index.tsx` to `about/page.tsx`. Tip first, then open `/02-route-predict/about`.
- Why would a team want a `_parts` folder next to pages?

## Tips

- Only `page.tsx` makes a URL. The folder path is the URL.
- `(group)` sorts files without changing the URL. `_folder` is never a URL.

## Links

- Layouts and pages: https://nextjs.org/docs/app/getting-started/layouts-and-pages
- Route groups and private folders: https://nextjs.org/docs/app/getting-started/project-structure#route-groups-and-private-folders
