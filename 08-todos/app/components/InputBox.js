import React from 'react';

let styles = {
  input: {
    width: '100%',
    boxSizing: 'border-box',
    outline: 'none',
    padding: '15px 10px',
    fontSize: '20px'
  },
  inputContainer: {
    width: '100%'
  }
};

class InputBox extends React.Component {
  handleTextChange = () => {
    this.props.sendText(this.refs.input.value);
  }
  handleEnterKey = (e) => {
    if (e.keyCode == 13 && this.refs.input.value !== '') {
      this.props.addTodo(this.refs.input.value);
    }
  }
  render() {
    return (
      <div style={styles.inputContainer}>
        <input
          ref='input'
          type='text'
          style={styles.input}
          value={this.props.value}
          placeholder={this.props.placeholder}
          onChange={this.handleTextChange}
          onKeyDown={this.handleEnterKey}
        />
      </div>
    );
  }
}

export default InputBox;
