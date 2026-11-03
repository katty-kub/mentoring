# AGENTS.md

A beginner learns to program here. Every file is for her. Her guide: `README.md`.
She reads code well; writing it is hard. Order: JS → TypeScript → React (TS) → Node + Express (TS).

## Rules

- Tutor, never solver: follow the Tutor output style and the `tutor` skill. Never commit reference solutions.
- `task.js`: copy an existing one. One goal per task; a twist is its own next task.
  Input data only, no steps or hints. Predict and Fix-the-bug: also the code to read. Guided: steps.
  `//` comments ≤ 100 chars. Runs without error from day one.
- `task.ts`: same rules. `npx tsc` is clean from day one too: a type error appears only after her change.
- `task.tsx`: same rules as `task.ts`. Its last component is `export const Task`.
  She never changes that export.
- Next task: `src/app/NN-task/page.tsx`, same rules. `npm run build` passes from day one.
  A server/client error appears only after her change: Modify, never Fix-the-bug.
- `TUTOR.md`: hints for the tutor, never the answer.
- Docs: short imperative sentences. Each rule in one file; link, don't repeat.

## Language

- She reads English at A1. Talk to her in Czech. Write her files in Czech:
  `README.md`, `ROADMAP.md`, `COMMANDS.md`, `task.js`, `task.ts` and `task.tsx` comments, the `tutor` skill.
- Dev terms and tech slang only: English first, Czech in brackets, on first use per file: `loop (smyčka)`.
  Never the other way round. Everyday words are plain Czech, no English.
  Test: does she meet it as a term in docs or errors? If not, Czech: `vypiš`, `kód`, `Jinak vypiš`.
- Code, names, commands and printed output stay English.
- `TUTOR.md` stays English. The tutor says its tips and questions in Czech.

## Mentors

- She works alone with the `tutor` skill. The mentor only adds tasks when she is done.
  No task step may need a human: no review, no reply, no setting she can't change herself.
- `00-onboarding` is mandatory now. `00-onboarding-extended` is optional: she returns to it after mentoring.
- In `clean-history` and `bad-merge` she force-pushes `main`. After each force push, `main` was rewritten.
  In your clone: `git switch main && git fetch --prune && git reset --hard origin/main`.
  Rebase or recreate any branch you started before. Don't merge into `main` while she is in these tasks.
- Your PR titles follow `COMMITS.md` too. In `clean-history` she rewords every other title on `main`.
- No open PR and no extra branch while she is in `clean-history`.
  Delete your branch after merge until she turns on auto-delete in `squash-merge`.
- `.claude/settings.json` sets the Tutor style and blocks edits to `task.js`, `task.ts`, `task.tsx` and Next `src/app/`, `public/`. Deny always wins.
- To write tasks with Claude: set `outputStyle` in the gitignored `.claude/settings.local.json`.
  Edit `task.js` in your editor. Claude drafts them in `.tasks/<topic>/drafts/`.
- `.tasks/` is the mentor's gitignored workspace. Never commit it.

## Code by level

- All levels: functions are arrow functions: `const add = (a, b) => a + b;`.
  Only `modern-js/01-arrow-function` shows `function`, on purpose.
- Level 1: plain JS via `node task.js`. Levels 1–2: no `import`/`export`.
- Level 2: TypeScript `strict` via `node task.ts` and `npx tsc` (root `tsconfig.json`).
- Level 2+: no `any`, no `as` casts, no `enum`: only erasable TS.
- Level 3 React: one Vite app in `curriculum/03-react`, own `package.json` and `tsconfig.json`.
  There: `npm run dev`, `npx tsc`, `npm run print`. `import`/`export` lines come ready in the task.
  Components are arrow functions: `const Badge = () => <strong>NEW</strong>;`. Hooks start in module 02. Derive values, don't store them in state.
- Level 3 Next (`03-next-basics`): own Next app, own `package.json`. One task = one route folder.
  There: `npm run dev`, `npm run build`, `npx tsc`. Each task shows the import lines she needs.
  Pages and layouts are arrow functions too: `const Page = () => …;` then `export default Page;`.
  Next needs that default export. Every other exported component: named export, `export const MenuHeader = …`.
  Exception: a file she renames to `page.tsx` (`Contact.tsx`, `about/index.tsx`) keeps `export default`.
  In an arrow function, Turbopack fails on JSX text starting with `0`: `<h1>01 x</h1>`. Avoid it.

## Git

- Messages and PR titles: `COMMITS.md`. Squash and merge only; the squash message is the PR title.
- Branch per batch of 1–3 tasks: `<module>/<first-task>` (`data-types/pin-check`). Risky practice: `practice/*`.
  Onboarding: one task = one branch `training/<task>` = one PR. Only the git commands in its `TUTOR.md`.
  Exception: `fix-conflict` works on the branch of her conflicted PR. No new branch, no new PR.
  Onboarding extended: one task = one branch `onboarding/<task>` = one PR (merging is the lesson).
- One `solve` commit per task; practice and merge commits may sit beside it (squash cleans).
  Push when the task is done. Stage explicit paths only. Her steps: `README.md`.
- Never push to `main`. Only exceptions: extended onboarding tasks `clean-history` and `bad-merge`.
  She does them with the tutor only. Mentor: see Mentors.
- Claude never runs state-changing git or `gh`, for her or for the mentor. Do git by hand.
  `.claude/settings.json` denies them; read-only commands stay allowed.
