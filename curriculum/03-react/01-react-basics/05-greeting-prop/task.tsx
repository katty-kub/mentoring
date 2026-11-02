// Greeting zdraví každého stejně. Ať dostane jméno jako prop (vstup komponenty).
// <img src="cat.png" /> ← src je prop obrázku

function Greeting() {
  return <p>Ahoj, Eva</p>;
}

export default function Task() {
  return (
    <div>
      <Greeting />
      <Greeting />
    </div>
  );
}

// stránka má ukázat:
// Ahoj, Eva
// Ahoj, Petr
