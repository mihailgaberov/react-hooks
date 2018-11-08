import React from 'react';
import StyledButton from '../../styled/StyledButton'

export default class Counter extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
  };

  setCount = (count) => {
    this.setState({
      count
    });
  };

  render() {
    return (<div>
        <p>You clicked {this.state.count} times</p>
        <StyledButton onClick={() => this.setCount(this.state.count + 1)}>
          Increment
        </StyledButton>
        <StyledButton onClick={() => this.setCount(this.state.count - 1)}>
          Decrement
        </StyledButton>
      </div>
    );
  };
}