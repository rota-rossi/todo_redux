import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'

import todoReducer from './store/reducers'
import { rootSaga } from './store/sagas'

import TodoList from './TodoList'


const sagaMiddleware = createSagaMiddleware()

let store = createStore(todoReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)

export default class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <TodoList />
      </Provider>
    )
  }
}