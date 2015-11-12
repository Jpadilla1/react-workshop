import React from 'react';
import ReactDOM from 'react-dom';

class HelloMom extends React.Component {
  render() {
    return (
      <div>Hello Dad {this.props.msg}</div>
    );
  }
}

class HelloWorld extends React.Component {
  render() {
    return (
      <div>
        Hello World
        <br/>
        <HelloMom msg={'this is a message'}/>
      </div>
    );
  }
}

ReactDOM.render(
  <HelloWorld/>,
  document.getElementById('root')
);
