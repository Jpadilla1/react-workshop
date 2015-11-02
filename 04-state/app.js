import React from 'react';
import ReactDOM from 'react-dom';

let message = {
  width: '90vw',
  wordWrap: 'break-word'
};

class InputBox extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange() {
    this.props.updateMessage(this.refs.inputNode.value);
  }
  render() {
    return (
      <input
        ref='inputNode'
        type='text'
        value={this.props.value}
        onChange={this.handleChange} />
    );
  }
}

class Message extends React.Component {
  constructor() {
    super();
    this.updateMessage = this.updateMessage.bind(this);
    this.state = { message: '' };
  }
  updateMessage(msg) {
    this.setState({message: msg});
  }
  render() {
    return (
      <div>
        <label>
          Your message:&nbsp;
          <InputBox
            value={this.state.message}
            updateMessage={this.updateMessage}
            />
        </label>
        <p style={message}>{this.state.message}</p>
      </div>
    );
  }
}

ReactDOM.render(
  <Message/>,
  document.getElementById('root')
);
