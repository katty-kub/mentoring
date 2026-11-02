# Tutor: Link, not a

Her question: "What is the difference between `<Link>` and `<a>`?"

## Ladder

- "Open F12 → Network, click Menu. What does the browser download?"
- "The counter lives in the layout. If the whole page loads again, what happens to its state?"
- "The task shows one import line. What could `Link` do differently?"

## Typical mistakes

- Asks what `layout.tsx` is. Ask: which part stays the same on both pages? Layouts return in layout-predict.
- Imports `Link` but keeps `<a>`. Ask her to click and watch the counter.
- Changes one link only. Ask her to go Menu → Domů too.
- Moves the counter into the page. Ask: does the bug go away, or the counter?

## What if

- Change one link back to `<a>`. Which direction loses the count now?
- Type the URL into the address bar. Does the count survive? Why?

## Tips

- In Next, links between your own pages are `<Link>`. `<a>` reloads everything.
- Layouts stay on screen while pages change. Their state survives a `<Link>` click.

## Links

- Linking and navigating: https://nextjs.org/docs/app/getting-started/linking-and-navigating
- Link: https://nextjs.org/docs/app/api-reference/components/link
