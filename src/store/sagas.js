import { delay } from 'redux-saga'
import { put, takeEvery, all } from 'redux-saga/effects'

let todoList = [
  "Walk the dog",
  "Buy milk",
  "Discuss Bike shedding"
]


export function* addTodoAsync(action) {
  yield delay(2000);
  todoList = [...todoList, action.value]
  yield put({ type: 'PERSISTED' })
}


export function* getTodosAsync() {
  yield delay(2000);
  yield put({ type: 'SET_TODOS', value: todoList })
}

export function* removeTodo(action) {
  yield delay(2000);
  todoList = todoList.filter(todo => todo !== action.value)
  yield put({ type: 'REMOVED' })
}


export function* rootSaga(action) {
  yield takeEvery('GET_TODOS', getTodosAsync)
  yield takeEvery('ADD_TODO', addTodoAsync)
  yield takeEvery('REMOVE_TODO', removeTodo)
}