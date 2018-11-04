import React, { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  let [text, setText] = useState('zero');

  setText = num => (num > 0 ? text = 'positive' : 'negative');

  return (
    <div>
      <p>You clicked {count} times. Current number is {text}</p>
      <button onClick={() => {
        setCount(count + 1);
        setText(count + 1);
      }}>
        Increment
      </button>
      <button onClick={() => setCount(count - 1)}>
        Decrement
      </button>
    </div>
  );
}