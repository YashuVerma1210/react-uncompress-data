import React from 'react';
import './style.css';
// import { compressed, restored } from './service';
// import { init } from './service_2';
import { getData } from './service_3';

export default function App() {
  const clickHandler = () => {
    // console.log(compressed);
    // console.log(restored);
    getData();
  };

  return (
    <div>
      <h1>Handle compressed data</h1>
      <button onClick={clickHandler}>Click Me</button>
    </div>
  );
}
