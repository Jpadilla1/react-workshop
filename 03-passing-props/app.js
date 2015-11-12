import React from 'react';
import ReactDOM from 'react-dom';

class HelloWorld extends React.Component {
  render() {
    return (
      <div>{this.props.msg} {this.props.hasSon}</div>
    );
  }
}

ReactDOM.render(
  <HelloWorld msg={'Hello Dad'} hasSon={'yes'}/>,
  document.getElementById('root')
);
