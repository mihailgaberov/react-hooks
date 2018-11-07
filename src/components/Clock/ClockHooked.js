import React, { useReducer, useEffect } from 'react';

const initialState = { hours: 0, minutes: 0, seconds: 0, isRunning: true };
let tickInterval = undefined;

function reducer(state, action) {
  switch (action.type) {
    case 'START':
    return {
      ...state,
      isRunning: true,
    };
    case 'TICK':
      return {
        ...state,
        hours: action.payload.hours,
        minutes: action.payload.minutes,
        seconds: action.payload.seconds,
      };
    case 'STOP': 
      clearInterval(tickInterval);
      return {
        ...state,
        isRunning: false,
      };
    case 'RESET':
      clearInterval(tickInterval);
      return {
        ...initialState,
        isRunning: false
      };
    default:
      return initialState;
  }
}

export default function ClockHooked() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (state.isRunning) {
      tickInterval = setInterval(() => {
        dispatch({
          type: 'TICK', payload: {
            hours: new Date().getHours(),
            minutes: new Date().getMinutes(),
            seconds: new Date().getSeconds(),
          }
        });
      }, 1000);
      return () => {
        clearInterval(tickInterval);
      };
    }
  });

  return (
    <div>
      The time
      is: {state.hours < 10 ? '0' + state.hours : state.hours} : {state.minutes < 10 ? '0' + state.minutes : state.minutes} : {state.seconds < 10 ? '0' + state.seconds : state.seconds}
      <div className="buttons">
        <button onClick={() => dispatch({type: 'START'})} disabled={state.isRunning}>
          Start
        </button>
        <button onClick={() => dispatch({type: 'STOP'})} disabled={!state.isRunning}>
          Stop
        </button>
        <button onClick={() => dispatch({ type: 'RESET' })}>
          Reset
        </button>
      </div>
    </div>
  );
}
