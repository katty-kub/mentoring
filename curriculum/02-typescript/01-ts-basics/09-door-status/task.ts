// Bug report (hlášení chyby): status má být "open", ale dveře hlásí closed.
// Oprav to. A ať TypeScript takový překlep příště chytí sám.
// status smí být jen "open" nebo "closed".

let status = "opne";

if (status === "open") {
  console.log("door open");
} else {
  console.log("door closed");
}

// node task.ts má vypsat: door open
