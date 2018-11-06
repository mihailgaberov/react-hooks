import React from 'react';

export default class Clock extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      interval: null,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  };

  componentDidMount() {
    this.start();
  }

  start = () => {
    if (this.state.interval !== null) return;

    this.setState({
      interval: setInterval(() => {
        const date = new Date();
        this.setState({
          hours: date.getHours(),
          minutes: date.getMinutes(),
          seconds: date.getSeconds(),
        })
      }, 1000)
    });
  };

  stop = () => {
    clearInterval(this.state.interval);
    this.setState({
      interval: null,
    });
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
    const { hours, minutes, seconds, interval} = this.state;

    return (
      <div>
        The time is: {hours < 10 ? '0' + hours: hours} : {minutes < 10 ? '0' + minutes : minutes} : {seconds < 10 ? '0' + seconds : seconds}
        <div className="buttons">
          <button onClick={() => this.start()} disabled={interval !== null}>
            Start
          </button>
          <button onClick={() => this.stop()} disabled={interval === null}>
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