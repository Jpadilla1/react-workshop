import React from 'react';

class InputBox extends React.Component {
  handleTextChange = () => {
    this.props.sendText(this.refs.input.value);
  }
  handleEnterKey = (e) => {
    if (e.keyCode == 13) {
      this.props.addTodo(this.refs.input.value);
    }
  }
  render() {
    return (
      <input
        ref='input'
        type='text'
        value={this.props.value}
        onChange={this.handleTextChange}
        onKeyDown={this.handleEnterKey}
      />
    );
  }
}

export default InputBox;
