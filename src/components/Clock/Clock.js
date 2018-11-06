import React from 'react';

let interval = null;

export default class Clock extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  };

  componentDidMount() {
    this.start();
  }

  start = () => {
    if (interval !== null) return;

    interval = setInterval(() => {
      const date = new Date();
      this.setState({
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds(),
      })
    }, 1000);
  };

  stop = () => {
    clearInterval(interval);
    interval = null;
  };

  reset = () => {
    this.stop();
    this.setState({
      hours: 0,
      minutes: 0,
      seconds: 0,
    });
  };

  render() {
    const { hours, minutes, seconds} = this.state;

    return (
      <div>
        The time is: {hours} : {minutes} : {seconds < 10 ? '0' + seconds : seconds}
        <div className="buttons">
          <button onClick={() => this.start()}>
            Start
          </button>
          <button onClick={() => this.stop()}>
            Stop
          </button>
          <button onClick={() => this.reset()}>
            Reset
          </button>
        </div>
      </div>

    );
  };
}