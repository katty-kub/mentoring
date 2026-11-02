// Napiš component (komponentu) Badge: ukáže štítek NEW. Dej ho ke každé novince.
// function Hello() { return <p>Hello</p>; } a pak <Hello />

export default function Task() {
  return (
    <ul>
      <li>Matcha latte</li>
      <li>Dýňový koláč</li>
      <li>Chai</li>
    </ul>
  );
}

// stránka má ukázat:
// Matcha latte NEW
// Dýňový koláč NEW
// Chai NEW
