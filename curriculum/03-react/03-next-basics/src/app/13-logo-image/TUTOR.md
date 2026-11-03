# Tutor: Logo image

Her question: "How do you show a picture in Next?"

## Ladder

- "In project-map, which URL showed the logo?"
- "The task shows one import. What must `Image` know to draw a picture? Look at the docs example."
- "Which file is the header in?"

## Typical mistakes

- `src="/public/logo.svg"`. Broken picture, 404 in Network. Ask: which URL worked in project-map?
- No `width`. `npm run dev` page fails (500): `Image with src "/logo.svg" is missing required "width" property.`
  `npm run build` stays green, so ask her to open the page. Then read the error out loud.
- No `alt`. `npx tsc`: `Property 'alt' is missing`. Ask: who reads `alt`?
- Puts the logo into `page.tsx`. It shows, but only on this page. Ask: where is the header?
- Uses `<img>`. Works. In Dev-Notes, ESLint warns about it. Ask her to read the `Image` docs intro.

## What if

- Set `width` to 200. Does the file change, or only its size on the page?
- Move `logo.svg` into `src/app/13-logo-image`. Which URL shows it now?

## Tips

- Files in `public/` are served from `/`. `public` is never part of the URL.
- `Image` with a file from `public/` needs `src`, `alt`, `width` and `height`.

## Links

- Images: https://nextjs.org/docs/app/getting-started/images
- Image component: https://nextjs.org/docs/app/api-reference/components/image
