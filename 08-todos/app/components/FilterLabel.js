import React from 'react';

let styles = {
  base: {
    border: '1px solid #4CAF50',
    padding: '5px',
    cursor: 'pointer',
    userSelect: 'none',
    WebkitTouchCallout: 'none',
    WebkitUserSelect: 'none',
    KhtmlUserSelect: 'none',
    MozUserSelect: 'none',
    MsUserSelect: 'none'
  },
  selected: {
    backgroundColor: '#4CAF50',
    color: 'white'
  }
}

class FilterLabel extends React.Component {
  handleChange = () => {
    this.props.toggle();
  }
  render() {
    let style = (this.props.selected) ?
      Object.assign({}, styles.base, styles.selected) : styles.base;
    return (
      <div
        style={style}
        onClick={this.handleChange}>
        Done
      </div>
    );
  }
}

export default FilterLabel;
