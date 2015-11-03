import React from 'react';

import TodoList from './components/TodoList';
import Checkbox from './components/Checkbox';

class TodosApp extends React.Component {
  constructor() {
    super();
    this.state = {
      inputText: '',
      todos: [],
      filterDone: false
    };
  }
  addTodo = (todo) => {
    let todos = this.state.todos;
    let nextId = (todos.length > 0) ? todos[todos.length-1].id + 1 : 1;
    todos.push({
      id: nextId,
      text: todo,
      done: false
    });
    this.setState({inputText: '', todos});
  }
  updateText = (text) => {
    this.setState({inputText: text});
  }
  markDone = (id) => {
    let todos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        todo.done = true;
      }
      return todo;
    });
    this.setState({todos});
  }
  toggleFilter = () => {
    this.setState({filterDone: !this.state.filterDone});
  }
  render() {
    let todos;
    if (this.state.filterDone) {
      todos = this.state.todos.filter((todo) => {
        return todo.done;
      });
    } else {
      todos = this.state.todos.filter((todo) => {
        return !todo.done;
      });
    }

    return (
      <div>
        <h2>Todos</h2>
        <div>
          <Checkbox
            toggle={this.toggleFilter}
            checked={this.state.filterDone}/>
          Done
        </div>
        <TodoList
          todos={todos}
          addTodo={this.addTodo}
          updateText={this.updateText}
          markDone={this.markDone}
          inputValue={this.state.inputText}/>
      </div>
    );
  }
}

export default TodosApp;
