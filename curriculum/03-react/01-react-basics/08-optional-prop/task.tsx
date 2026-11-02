// Skoro každý Avatar má size 48. Ať se prop (vstup) size psát nemusí. Bez size má Avatar 48.

function Avatar({ name, size }: { name: string; size: number }) {
  const circle = {
    width: size,
    height: size,
    borderRadius: "50%",
    background: "teal",
    color: "white",
    display: "grid",
    placeItems: "center",
  };
  return <div style={circle}>{name[0]}</div>;
}

export default function Task() {
  return (
    <div>
      <Avatar name="Eva" size={48} />
      <Avatar name="Petr" size={48} />
      <Avatar name="Jana" size={96} />
    </div>
  );
}

// stránka má ukázat (stejně jako teď): kolečka E a P (48 px), velké kolečko J (96 px)
