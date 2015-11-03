import React from 'react';

import TodoList from './components/TodoList';
import FilterLabel from './components/FilterLabel';

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
    display: 'flex',
    flex: '1',
    justifyContent: 'center',
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
  toggleDone = (id) => {
    let todos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        todo.done = !todo.done;
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

    if (this.state.inputText) {
      todos = todos.filter((todo) => {
        return todo.text.startsWith(this.state.inputText);
      });
    }

    return (
      <div style={styles.appContainer}>
        <h1 style={styles.title}>Todos</h1>
        <hr/>
        <div style={styles.filter}>
          <FilterLabel
            toggle={this.toggleFilter}
            selected={this.state.filterDone}/>
        </div>
        <TodoList
          todos={todos}
          addTodo={this.addTodo}
          updateText={this.updateText}
          toggleDone={this.toggleDone}
          inputValue={this.state.inputText}/>
      </div>
    );
  }
}

export default TodosApp;
