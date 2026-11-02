// Bug report (hlášení chyby): káva 59 a koláč 45 mají dát 104 Kč. Stránka ukazuje 5945 Kč.
// Oprav to. A ať TypeScript takovou chybu příště chytí sám.

function Total({ coffee, cake }: { coffee: string; cake: string }) {
  return <p>Celkem: {coffee + cake} Kč</p>;
}

export default function Task() {
  return <Total coffee="59" cake="45" />;
}

// stránka má ukázat: Celkem: 104 Kč
