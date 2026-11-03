# Tutor: Layout predict

Her question: "What does a `layout.tsx` wrap?"

## Ladder

- "Which folder is `menu/layout.tsx` in? Which URLs start with that folder?"
- "Where does `{children}` sit in a layout? What goes there?"

## Typical mistakes

- Runs the URLs first. Tips go in before she opens anything.
- Tips MENU on `/about`. Ask: is `about` inside `menu`?
- Tips only MENU on `/menu`. Ask: is `menu` inside the task folder with KAVÁRNA?
- Forgets `/menu/42`. Ask: is `[id]` inside `menu`?

## What if

- Add `menu/[id]/layout.tsx` with "DETAIL". Tip each URL again.
- Where is the root layout with `<html>`? Does it wrap this task too?

## Tips

- Layouts nest like folders. A page gets every layout above it.

## Links

- Creating a layout: https://nextjs.org/docs/app/getting-started/layouts-and-pages#creating-a-layout
- Nesting layouts: https://nextjs.org/docs/app/getting-started/layouts-and-pages#nesting-layouts
