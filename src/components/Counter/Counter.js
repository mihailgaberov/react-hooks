import React from 'react';

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
        <button onClick={() => this.setCount(this.state.count + 1)}>
          Increment
        </button>
        <button onClick={() => this.setCount(this.state.count - 1)}>
          Decrement
        </button>
      </div>
    );
  };
}