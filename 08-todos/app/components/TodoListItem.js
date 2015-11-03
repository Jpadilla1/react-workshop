import React from 'react';
import Radium from 'radium';
import Icon from 'react-fa';

let styles = {
  item: {
    listStyleType: 'none',
    padding: '20px 15px',
    fontSize: '18px',
    border: '1px solid rgba(200, 200, 200, 1)',
    borderTop: 'none',
    display: 'flex',
    flex: 1
  },
  p: {
    margin: '0',
    marginLeft: '20px',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden'
  },
  button: {
    border: 'none',
    borderRadius: '50%',
    fontSize: '18px',
    backgroundColor: 'white',
    boxShadow: '0 1px 3px rgba(200, 200, 200, 1)',
    color: '#777',
    cursor: 'pointer',
    ':hover': {
      backgroundColor: '#4CAF50',
      color: 'white'
    }
  }
};

@Radium
class TodoListItem extends React.Component {
  handleDoneClick = (id) => {
    this.props.toggleDone(id)
  }
  render() {
    let icon = (this.props.todo.done) ?
      (<Icon name='undo'/>) : (<Icon name='check'/>);
    return (
      <li style={styles.item}>
        <button
          style={styles.button}
          onClick={() => this.handleDoneClick(this.props.todo.id)}>
          {icon}
        </button>
        <p style={styles.p}>{this.props.todo.text}</p>
      </li>
    );
  }
}

export default TodoListItem;
