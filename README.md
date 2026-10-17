# Start here

You learn to program here, one small task at a time.
Path: JavaScript → JavaScript in the browser → React → TypeScript → Node.js + Express.

**Claude is your tutor, not your solver.** It asks questions. It never writes your code.
What you work out yourself, you remember.

Your five goals:

1. start a task you've never seen,
2. break it into small steps,
3. know when to use a loop, a condition or a function,
4. find and fix bugs alone,
5. explain your solution.

## Setup (once)

1. Install [Node.js](https://nodejs.org) (LTS), [git](https://git-scm.com), the [GitHub CLI](https://cli.github.com)
   and [Claude Code](https://code.claude.com/docs/en/quickstart).
2. `git config --global user.name "Your Name"` and `git config --global user.email "you@example.com"`.
3. `gh auth login`.
4. `git clone https://github.com/katty-kub/mentoring.git && cd mentoring`.
5. Turn off AI suggestions in your editor. VS Code: this repo already does it.
6. Run `claude`. Trust the folder.

## Every module

1. Create the branch the tutor names: `git switch -c data-types`.
2. Solve its tasks, one by one.
3. After the first task: open a pull request on GitHub. Your mentor follows it there.
4. After the last task: write the module's `SUMMARY.md`, your cheat sheet. Merge. `git switch main && git pull`.

## Every task

1. Run `claude`. Say **next**.
2. Solve it with the five steps below.
3. Stage the files the tutor lists. Commit. `git push` (first time on a branch: `git push -u origin data-types`).
4. Type `/clear`. Say **next**.

Stop any time. Next time, say **continue**. Task order: [curriculum/ROADMAP.md](curriculum/ROADMAP.md).

| Say | The tutor |
|---|---|
| **next** | gives your next task |
| **start sort-ascending** | gives that task instead |
| **continue** | picks up where you stopped |
| **I'm stuck** | asks for your three lines, then gives one hint |
| **check my solution** | asks about your code |
| **I'm done** | checks your work, lists the files to commit |

In each task folder: `task.js` is yours. Write your code below the task comments; don't change them.
`TUTOR.md` is hints for the tutor. Don't read it: it spoils them.

## Solve a task: five steps

Every task, even small ones. Write them down until they're automatic.

**1. Understand.** No code yet. Say the task in your own words.
Write two examples (input → output) and one edge case (empty, zero, wrong type, missing).
Can't write the examples? Reread the task, or ask.

**2. Plan.** Write the steps as comments in `task.js`. Plain words, no code.

```js
// go through every number
// remember the smallest one so far
// at the end, print it
```

| Ask | You probably need |
|---|---|
| Does something **repeat**? | a loop |
| Do I **choose** between options? | a condition (`if`) |
| Do I do the **same thing twice**? | a function |

**3. Code.** `cd` into the task folder. Turn one comment into code. Run `node task.js`. Then the next comment.

**4. Check.** Compare with `should print` at the bottom.
Try your own examples and your edge case. Then put the original input back.
Wrong? Don't guess. `console.log` the values just before it. Find **where** it breaks.

**5. Explain.** Tell the tutor in chat: what it does step by step, why this way, what happens with the edge case.
Can't explain a part? Go back to that code.

**Done when** `node task.js` prints what it should, also for your examples, and you explained it.

## When you're stuck

Write three lines:

1. **I'm trying to…**
2. **I expected…**
3. **What happened…**

This often shows you the bug. If not, the tutor now has what it needs.
Still stuck after all hints? Ask your mentor on the pull request. That's normal.
