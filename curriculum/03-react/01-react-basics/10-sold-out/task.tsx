// Když je count 0, má Stock ukázat „Vyprodáno“ místo „0 ks“.

function Stock({ name, count }: { name: string; count: number }) {
  return (
    <p>
      {name}: {count} ks
    </p>
  );
}

export default function Task() {
  return (
    <div>
      <Stock name="Káva" count={12} />
      <Stock name="Koláč" count={0} />
      <Stock name="Čaj" count={3} />
    </div>
  );
}

// stránka má ukázat:
// Káva: 12 ks
// Koláč: Vyprodáno
// Čaj: 3 ks
