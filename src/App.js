import React, { Component } from 'react';
import './App.css';
import { Counter } from './components/Counter'
import { CounterHooked } from './components/Counter'
import StyledRow from "./styled/StyledRow"

class App extends Component {
  render() {
    return (
      <div className="App">
        <StyledRow>
          Old (current) way: <Counter />
        </StyledRow>
        <StyledRow>
          Hooked way: <CounterHooked />
        </StyledRow>
      </div>
    );
  }
}

export default App;
