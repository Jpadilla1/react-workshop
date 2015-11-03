import React from 'react';

import TodoList from './components/TodoList';
import Checkbox from './components/Checkbox';

let styles = {
  appContainer: {
    width: '500px',
    fontFamily: 'Helvetica Neue, Helvetica, sans-serif',
    margin: 'auto',
    color: 'rgba(80, 80, 80, 1)'
  },
  title: {
    fontSize: '48px',
    textAlign: 'center'
  },
  filter: {
    textAlign: 'center',
    marginBottom: '10px'
  }
};

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
      <div style={styles.appContainer}>
        <h1 style={styles.title}>Todos</h1>
        <hr/>
        <div style={styles.filter}>
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
