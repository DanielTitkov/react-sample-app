import React, { Component } from 'react'
import Todos from './Todos'
import AddTodo from './AddTodo'

export default class App extends Component {
  state = {
    todos: [
      {id: 1, content: "buy pizza"},
      {id: 2, content: "kick ass"},
      {id: 3, content: "hit the road jack"},
    ]
  }

  addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo]
    this.setState({
      todos: todos
    })
  }

  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    });
    this.setState({
      todos: todos
    })
  }

  render() {
    return (
      <div className="todo-app container">
        <h1 className='center blue-text'>Todos</h1>
        <Todos 
          todos={ this.state.todos } 
          deleteTodo={ this.deleteTodo } 
        />
        <AddTodo addTodo={ this.addTodo } />
      </div>
    )
  }
}

