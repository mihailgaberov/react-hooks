import React, { useState, useEffect, useContext } from 'react';
import { ColorContext } from '../../ColorContext';

export default function Counter() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('zero');
  const { state, dispatch } = useContext(ColorContext);

  console.log('>>> state: ', state)

  useEffect(
    () => {
      document.body.style.backgroundColor = state.currentColor;
    },
    [state.currentColor]
  );

  return (
    <div>
      <p>You clicked {count} times. Current number is {text}</p>
      <button onClick={() => {
        setCount(count + 1);
        setText((count + 1 ) > 0 ? 'positive': 'zero');
      }}>
        Increment
      </button>
      <button onClick={() => {
        setCount(count - 1);
        setText((count - 1) < 0 ? 'negative': 'zero');
      }}>
        Decrement
      </button>
    </div>
  );
}
