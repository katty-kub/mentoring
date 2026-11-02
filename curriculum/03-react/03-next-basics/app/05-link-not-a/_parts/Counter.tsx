"use client";

import { useState } from "react";

export default function Counter() {
  const [likes, setLikes] = useState(0);
  return <button onClick={() => setLikes(likes + 1)}>Líbí {likes}</button>;
}
