import React from 'react';
import './style.css';
import { compressed, restored } from './service';
import { init } from './service_2';

export default function App() {
  const clickHandler = () => {
    // console.log(compressed);
    // console.log(restored);
    init();
  };

  return (
    <div>
      <h1>Handle compressed data</h1>
      <button onClick={clickHandler}>Click Me</button>
    </div>
  );
}
