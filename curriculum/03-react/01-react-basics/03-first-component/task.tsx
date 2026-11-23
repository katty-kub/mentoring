// Napiš component (komponentu) Badge: ukáže štítek NEW. Dej ho ke každé novince.
// const Hello = () => <p>Hello</p>; a pak <Hello />

const Badge = () => <span>NEW</span>;


export const Task = () => (
  <ul>
    <li>Matcha latte <Badge /></li>
    <li>Dýňový koláč <Badge /></li>
    <li>Chai <Badge /></li>
  </ul>
);

// stránka má ukázat:
// Matcha latte NEW
// Dýňový koláč NEW
// Chai NEW
