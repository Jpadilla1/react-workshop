import React from 'react';
import ReactDOM from 'react-dom';

class HelloMom extends React.Component {
  render() {
    return (
      <div>Hello Mom</div>
    );
  }
}

class HelloWorld extends React.Component {
  render() {
    return (
      <div>
        Hello World
        <br/>
        <HelloMom/>
      </div>
    );
  }
}

ReactDOM.render(
  <HelloWorld/>,
  document.getElementById('root')
);
