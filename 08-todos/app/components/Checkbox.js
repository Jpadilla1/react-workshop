import React from 'react';

class Checkbox extends React.Component {
  handleChange = () => {
    this.props.toggle();
  }
  render() {
    return (
      <input
        type='checkbox'
        checked={this.props.checked}
        onChange={this.handleChange}
      />
    );
  }
}

export default Checkbox;
