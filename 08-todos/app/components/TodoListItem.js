import React from 'react';

let styles = {
  item: {
    listStyleType: 'none',
    padding: '20px 15px',
    fontSize: '18px',
    border: '1px solid rgba(200, 200, 200, 1)',
    borderTop: 'none'
  },
  p: {
    display: 'inline-block',
    margin: '0',
    marginLeft: '20px',
    wordWrap: 'break-word'
  },
  button: {
    border: 'none',
    borderRadius: '50%',
    fontSize: '18px',
    backgroundColor: 'red',
    boxShadow: '0 1px 5px rgba(200, 200, 200, 1)',
    color: 'white'
  }
};

class TodoListItem extends React.Component {
  handleDoneClick = (id) => {
    this.props.markDone(id)
  }
  render() {
    return (
      <li style={styles.item}>
        <button style={styles.button} onClick={() => this.handleDoneClick(this.props.todo.id)}>&#10003;</button>
        <p style={styles.p}>{this.props.todo.text}</p>
      </li>
    );
  }
}

export default TodoListItem;
