import React from 'react';

class TodoListItem extends React.Component {
  handleDoneClick = (id) => {
    this.props.markDone(id)
  }
  render() {
    return (
      <li>
        {this.props.todo.text}
        <button onClick={() => this.handleDoneClick(this.props.todo.id)}>Done</button>
      </li>
    );
  }
}

export default TodoListItem;
