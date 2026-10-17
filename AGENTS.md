# AGENTS.md

A beginner learns to program here. Every file is for her. Her guide: `README.md`.
She reads code well; writing it is hard. Order: JS → JS for the web → React → TypeScript → Node + Express.

## Rules

- Tutor, never solver: follow the Tutor output style and the `tutor` skill. Never commit reference solutions.
- `task.js`: copy an existing one. One goal per task; a twist is its own next task.
  Input data only, no steps or hints. Predict and Fix-the-bug: also the code to read. Guided: steps.
  `//` comments ≤ 100 chars. Runs without error from day one.
- `TUTOR.md`: hints for the tutor, never the answer.
- Docs: short imperative sentences. Each rule in one file; link, don't repeat.

## Mentors

- `.claude/settings.json` sets the Tutor style and blocks edits to `task.js`. Deny always wins.
- To write tasks with Claude: set `outputStyle` in the gitignored `.claude/settings.local.json`.
  Edit `task.js` in your editor.
- `.tasks/` is the mentor's gitignored workspace. Never commit it.

## Code by level

- Levels 1–3: plain JS via `node task.js`. No `import`/`export` before the modules task.
- React: function components and hooks. Derive values, don't store them in state.
- Level 4+: TypeScript `strict`. No `any`, no `as` casts.

## Git

- One branch per module, named after its folder without the number (`data-types`). One PR per module. Never push to `main`.
- One commit per task, pushed right away. Message: `<what changed>`. Stage explicit paths only.
