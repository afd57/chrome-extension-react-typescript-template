import React from "react";
import { render } from "react-dom";
import { useState } from 'react';

function Counter() {
  const [score, setScore] = useState(0);
  const [hover, setHover] = useState(false);

  let className = 'counter';
  if (hover) {
    className += ' hover';
  }

  return (
    <div
      className={className}
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
    >
      <h1>{score}</h1>
      <button onClick={() => setScore(score + 1)}>
        Add one
      </button>
    </div>
  );
}


function Hello() {

  return (
    <div>
      <h1>Hello World</h1>
      <Counter />
    </div>
  );
}

render(<Hello />, document.getElementById("react-target"));



