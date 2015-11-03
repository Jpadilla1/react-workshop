import React from 'react';

import TodoListItem from './TodoListItem';
import InputBox from './InputBox';

class TodoList extends React.Component {
  render() {
    return (
      <div>
        <InputBox
          value={this.props.inputValue}
          sendText={this.props.updateText}
          addTodo={this.props.addTodo}
        />
        <ul>
          {this.props.todos.map((value) => {
            return (
              <TodoListItem
                key={value.id}
                todo={value}
                markDone={this.props.markDone}/>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default TodoList;
