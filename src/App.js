import React, { Component } from 'react';
import './App.css';
import { Counter } from './components/Counter';
import { CounterHooked } from './components/Counter';
import StyledRow from "./styled/StyledRow";
import StyledContainer from "./styled/StyledContainer";
import StyledTitle from "./styled/StyledTitle";
import DataFetcher from "./components/DataFetcher/DataFetcher";
import DataFetcherHooked from "./components/DataFetcher/DataFetcherHooked";
import Clock from "./components/Clock/Clock";
import ClockHooked from "./components/Clock/ClockHooked";

class App extends Component {
  render() {
    return (
      <div className="App">
        <StyledContainer>
          <StyledTitle>Class Components</StyledTitle>
          <StyledTitle>Hooked Components</StyledTitle>
        </StyledContainer>
        <StyledContainer>
          <StyledRow>
            Counter <Counter />
          </StyledRow>
          <StyledRow>
            CounterHooked <CounterHooked />
          </StyledRow>
        </StyledContainer>
        <StyledContainer>
          <StyledRow>
            DataFetcher <DataFetcher />
          </StyledRow>
          <StyledRow>
            DataFetcherHooked <DataFetcherHooked />
          </StyledRow>
        </StyledContainer>
        <StyledContainer>
          <StyledRow>
            Clock <Clock />
          </StyledRow>
          <StyledRow>
            ClockHooked <ClockHooked />
          </StyledRow>
        </StyledContainer>
      </div>
    );
  }
}

export default App;
