import React from "react";
import { useState } from 'react';

export function Counter({ style }) {
  const [score, setScore] = useState(0);
  const [hover, setHover] = useState(false);
  console.log(style);

  let className = "counter";
  if (hover) {
    className += " hover";
  }

  return (
    <div
      className={className}
      style={style}
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
    >
      <h1>{score}</h1>
      <button onClick={() => setScore(score + 1)}>Add one</button>
    </div>
  );
}
  