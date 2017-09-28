import React, { Component } from 'react'
import { connect } from 'react-redux'

import TodoItem from './TodoItem'


class TodoList extends Component {
  render() {
    let { todos } = this.props
    return (
      <div>
        <h1>The Ugliest TODO LIST Ever!</h1>
        <ul>
          {
            todos.map((todo, key) => <TodoItem key={key} item={todo} />)
          }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    todos: state
  }
}

export default connect(mapStateToProps)(TodoList)