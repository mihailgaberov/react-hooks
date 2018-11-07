import React, { useReducer } from 'react';

const initialState = { hours: 0, minutes: 0, seconds: 0, tickInterval: undefined };

function reducer(state, action) {
  switch (action.type) {
    case 'START':
      return {
        ...state,
        tickInterval: setInterval(() => {
          state.hours = new Date().getHours();
          state.minutes = new Date().getMinutes();
          state.seconds = new Date().getSeconds();
          console.log('>>> time: ', state.hours + ':' + state.minutes + ':' + state.seconds);
        }, 1000),
      };
    case 'STOP':
      return {
        ...state,
        tickInterval: clearInterval(state.tickInterval)
      };
    case 'RESET':
      return {
        state: action.payload,
        tickInterval: clearInterval(state.tickInterval)
      };
    default:
      return initialState;
  }
}

export default function ClockHooked() {
  const [ state, dispatch ] = useReducer(reducer, initialState, {type: 'RESET', payload: initialState});

  console.log(state.tickInterval);

  return (
    <div>
      The time
      is: {state.hours < 10 ? '0' + state.hours : state.hours} : {state.minutes < 10 ? '0' + state.minutes : state.minutes} : {state.seconds < 10 ? '0' + state.seconds : state.seconds}
      <div className="buttons">
        <button onClick={() => dispatch({ type: 'START' })} disabled={state.tickInterval !== undefined}>
          Start
        </button>
        <button onClick={() => dispatch({ type: 'STOP' })} disabled={state.tickInterval === undefined}>
          Stop
        </button>
        <button onClick={() => dispatch({ type: 'RESET' })}>
          Reset
        </button>
      </div>
    </div>
  );
}