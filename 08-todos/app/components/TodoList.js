import React from 'react';

import TodoListItem from './TodoListItem';
import InputBox from './InputBox';

let styles = {
  list: {
    margin: '0',
    padding: '0'
  }
}

class TodoList extends React.Component {
  render() {
    return (
      <div>
        <InputBox
          value={this.props.inputValue}
          sendText={this.props.updateText}
          addTodo={this.props.addTodo}
          placeholder='Add a new todo'
        />
        <ul style={styles.list}>
          {this.props.todos.map((value) => {
            return (
              <TodoListItem
                key={value.id}
                todo={value}
                toggleDone={this.props.toggleDone}
                deleteTodo={this.props.deleteTodo}/>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default TodoList;
