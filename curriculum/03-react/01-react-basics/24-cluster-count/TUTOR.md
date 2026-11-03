# Tutor: Cluster count

Her question: "Why should a value be computed, not stored?"

## Ladder

- "Where does the 2 come from? Who wrote it there?"
- "Can you get the number of clusters from the data without `clusterCount`? How do you count items in an array?"
- "Someone adds a cluster next week. With your fix, what must they remember?"

## Typical mistakes

- Changes `clusterCount: 2` to `3`. Page is right. Ask: next week a fourth cluster. Who updates it?
- Uses `clusters.length` but keeps `clusterCount` in the type and data. Ask: who still needs it?
- Removes it from the data only. `npx tsc`: `Property 'clusterCount' is missing`. Read it with her.
- Thinks the type is wrong. Ask: does the type stop two numbers from disagreeing?

## What if

- Add `notes: 7` to API and show "Okruhy: 3 · Poznámky: 7". Which value is stored, which computed?
- Is `clusters.join(", ")` stored or computed?

## Tips

- If a value follows from other data, compute it where you show it. Two copies drift apart.
- Teams call this one source of truth.

## Links

- Avoid redundant state: https://react.dev/learn/choosing-the-state-structure#avoid-redundant-state
  (She has no state yet. Same rule for plain data: don't store what you can compute.)
