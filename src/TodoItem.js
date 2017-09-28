import React, { Component } from 'react'

const TodoItem = ({ item, removeTodo }) => {
  return (
    <li>{item} <button onClick={() => removeTodo(item)}>X</button></li>
  )
}

export default TodoItem