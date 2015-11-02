import React from 'react';
import ReactDOM from 'react-dom';

class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
    this.increaseCount = this.increaseCount.bind(this);
  }
  increaseCount() {
    this.setState({count: this.state.count + 1});
  }
  render() {
    return (
      <div>
        <p>You have clicked this button {this.state.count} times!</p>
        <button onClick={this.increaseCount}>Click me!</button>
      </div>
    );
  }
}

ReactDOM.render(
  <Counter/>,
  document.getElementById('root')
);
