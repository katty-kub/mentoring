# Tutor: About page

Her question: "How do you add a new page in Next?"

## Ladder

- "In route-predict, which file made `/01-route-predict/menu` work? Where was it?"
- "So for `/02-about-page/about`, which folder and which file do you need?"

## Typical mistakes

- Creates `02-about-page/about.tsx`. Ask: in route-predict, was any page a file named like the URL?
- Names it `Page.tsx` or `About.tsx`. Ask her to read the build table. Is the URL there?
- Forgets `export default`. Next shows an error on the page. Ask her to read it out loud.
- Copies `page.tsx` from the task folder with all comments. Fine, but ask: whose comments are these?

## What if

- Add `/02-about-page/about/team` with one more file.
- Delete `about/page.tsx`. What does the build table say now?

## Tips

- New page = new folder + `page.tsx` with a default export.
- `npm run build` lists every URL. Teams read it when a page goes missing.

## Links

- Creating a page: https://nextjs.org/docs/app/getting-started/layouts-and-pages#creating-a-page
- page.tsx: https://nextjs.org/docs/app/api-reference/file-conventions/page
