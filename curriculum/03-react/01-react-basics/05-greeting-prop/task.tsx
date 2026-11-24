// Greeting zdraví každého stejně. Ať dostane jméno jako prop (vstup komponenty).
// <img src="cat.png" /> ← src je prop obrázku

type GreetingProps = {
  name: string;
};

const Greeting = ({ name }: GreetingProps) => <p>Ahoj, {name}</p>;

export const Task = () => (
  <div>
    <Greeting name="Eva" />
    <Greeting name="Petr" />
  </div>
);

// stránka má ukázat:
// Ahoj, Eva
// Ahoj, Petr
