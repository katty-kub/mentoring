// Greeting zdraví každého stejně. Ať dostane jméno jako prop (vstup komponenty).
// <img src="cat.png" /> ← src je prop obrázku

const Greeting = () => <p>Ahoj, Eva</p>;

export const Task = () => (
  <div>
    <Greeting />
    <Greeting />
  </div>
);

// stránka má ukázat:
// Ahoj, Eva
// Ahoj, Petr
