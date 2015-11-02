import React from 'react';
import ReactDOM from 'react-dom';

class HelloWorld extends React.Component {
  render() {
    return (
      <div>{this.props.msg}</div>
    );
  }
}

ReactDOM.render(
  <HelloWorld msg={'Hello Dad'}/>,
  document.getElementById('root')
);
