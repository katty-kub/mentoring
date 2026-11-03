# Tutor: Nested route

Her question: "How do you make a page inside another page's URL?"

## Ladder

- "Read `/05-nested-route/menu/drinks` part by part. Which folder is each part?"
- "Where is the menu page now? Where would drinks go next to it?"

## Typical mistakes

- Creates `05-nested-route/drinks/page.tsx`. Ask her to open that URL. Which URL did it make?
- Creates `menu/drinks.tsx`. Ask: what made a page in about-page?
- Thinks menu loses its page. Ask her to open `/05-nested-route/menu` again.

## What if

- Add `/05-nested-route/menu/drinks/hot`. How many folders deep?

## Tips

- Every `/` in the URL is one folder. Each folder can have its own `page.tsx`.

## Links

- Nested routes: https://nextjs.org/docs/app/getting-started/layouts-and-pages#creating-a-nested-route
