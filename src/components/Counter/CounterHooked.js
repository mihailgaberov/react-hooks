import React, { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  let [text, setText] = useState('zero');

  return (
    <div>
      <p>You clicked {count} times. Current number is {text}</p>
      <button onClick={() => {
        setCount(count + 1);
        setText((count + 1 ) > 0 ? 'positive': '');
      }}>
        Increment
      </button>
      <button onClick={() => {
        setCount(count - 1);
        setText((count - 1) < 0 ? 'negative': '');
      }}>
        Decrement
      </button>
    </div>
  );
}