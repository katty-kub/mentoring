# Tutor: Not a page

Her question: "Why does a folder with a component still give 404?"

## Ladder

- "What is in the `contact` folder? What is the file called?"
- "In route-predict, did `menu/drinks/Drinks.tsx` make a page? Why not?"

## Typical mistakes

- Adds a new `page.tsx` that imports `Contact`. Works; ask: do you need two files here?
- Renames to `Page.tsx`. Ask her to check the build table.
- Thinks the bug is in the component code. Ask: does Next even look at this file?

## What if

- Rename the folder to `kontakt`. Which URL works now?

## Tips

- 404 for a page that "exists"? Check the file name first: `page.tsx`, small letters.

## Links

- page.tsx: https://nextjs.org/docs/app/api-reference/file-conventions/page
