import React, { Component } from 'react'
import { connect } from 'react-redux'

import { addTodo, removeTodo, getTodos } from './store/actions'
import TodoItem from './TodoItem'


class TodoList extends Component {
  state = { newTodo: '' }

  componentDidMount() {
    this.props.getTodos()
  }

  handleSubmit = (ev) => {
    ev.preventDefault()
    this.props.addTodo(this.state.newTodo)
    this.setState({ newTodo: '' })
  }

  handleNewTodo = (ev) => {
    this.setState({ newTodo: ev.target.value })
  }

  render() {
    let { todos, addTodo, removeTodo } = this.props
    return (
      <div>
        <h1>The Ugliest TODO LIST Ever!</h1>
        <ul>
          {
            todos.map((todo, key) => <TodoItem key={key} item={todo} removeTodo={removeTodo} />)
          }
        </ul>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.newTodo} onChange={this.handleNewTodo} placeholder='Add new Todo' /><button type='submit'>OK</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    todos: state
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTodo: item => dispatch(addTodo(item)),
    removeTodo: item => dispatch(removeTodo(item)),
    getTodos: () => dispatch(getTodos())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)