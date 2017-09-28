import 'rxjs'
import { combineEpics } from 'redux-observable'

import { setTodos } from './actions'

let todoList = [
  "Walk the dog",
  "Buy milk",
  "Discuss Bike shedding"
]

const getTodos = (action$, store) =>
  action$
    .ofType('GET_TODOS')
    .delay(2000)
    .mapTo(setTodos(todoList))

const addTodo = (action$, store) =>
  action$
    .ofType('ADD_TODO')
    .delay(2000)
    .map(action => todoList = [...todoList, action.item])
    .mapTo({ type: 'PERSISTED' })

const removeTodo = (action$, store) =>
  action$
    .ofType('REMOVE_TODO')
    .delay(2000)
    .map(action => todoList = todoList.filter(todo => todo !== action.value))
    .mapTo({ type: 'DELETED' })

export default combineEpics(getTodos, addTodo, removeTodo)