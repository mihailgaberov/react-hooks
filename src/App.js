import React, { Component } from 'react';
import './App.css';
import { Counter } from './components/Counter'
import { CounterHooked } from './components/Counter'
import StyledRow from "./styled/StyledRow"
import DataFetcher from "./components/DataFetcher/DataFetcher";
import DataFetcherHooked from "./components/DataFetcher/DataFetcherHooked";
import Clock from "./components/Clock/Clock";
import ClockHooked from "./components/Clock/ClockHooked";

class App extends Component {
  render() {
    return (
      <div className="App">
        <StyledRow>
          Counter - Old (current) way: <Counter/>
        </StyledRow>
        <StyledRow>
          Counter - Hooked way: <CounterHooked/>
        </StyledRow>
        <StyledRow>
          DataFetcher - Old (current) way: <DataFetcher/>
        </StyledRow>
        <StyledRow>
          DataFetcherHooked - Hooked way: <DataFetcherHooked/>
        </StyledRow>
        <StyledRow>
          Clock - Old (current) way: <Clock/>
        </StyledRow>
        <StyledRow>
          ClockHooked - Hooked way: <ClockHooked/>
        </StyledRow>
      </div>
    );
  }
}

export default App;
