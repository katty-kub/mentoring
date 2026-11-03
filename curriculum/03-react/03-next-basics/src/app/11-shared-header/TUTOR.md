# Tutor: Shared header

Her question: "When do you use a layout instead of copying a component?"

## Ladder

- "Which pages show `MenuHeader`? Which folder do they share?"
- "In layout-predict, which file showed MENU on every menu page?"

## Typical mistakes

- Puts the layout in the task folder. Ask her to open `/11-shared-header`. Is the header there now?
- Adds the layout but leaves `<MenuHeader />` in the pages. Page shows it twice.
- Forgets `{children}`. Page shows only the header. Ask: where does the page go?
- Import path. Ask her to count folders from the layout to `_parts`.

## What if

- Add `/11-shared-header/menu/specials`. Does it get the header without any work?

## Tips

- Same part on many pages of one folder → layout in that folder.
- Page looks the same before and after. Done = one `MenuHeader` use, in a layout.

## Links

- Nesting layouts: https://nextjs.org/docs/app/getting-started/layouts-and-pages#nesting-layouts
