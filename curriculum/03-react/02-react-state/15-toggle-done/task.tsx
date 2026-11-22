import { useState } from "react";

// Klik na tlačítko u úkolu přepne jeho done: z false na true a zpátky. Ostatní úkoly se nezmění.

export const Task = () => {
  const [todos, setTodos] = useState([
    { id: 1, title: "Umýt kávovar", done: false },
    { id: 2, title: "Objednat mléko", done: true },
    { id: 3, title: "Zalít kytky", done: false },
  ]);

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <button>{todo.done ? "✓" : "○"}</button> {todo.title}
        </li>
      ))}
    </ul>
  );
};

// stránka má ukázat: ○ Umýt kávovar, ✓ Objednat mléko, ○ Zalít kytky
// po kliku na tlačítko u Zalít kytky: ○ Umýt kávovar, ✓ Objednat mléko, ✓ Zalít kytky
// po dalším kliku na stejné tlačítko: stejně jako na začátku
