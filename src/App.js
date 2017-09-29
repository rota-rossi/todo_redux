import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'

import todoReducer from './store/reducers'
import { rootSaga } from './store/sagas'

import TodoList from './TodoList'


const sagaMiddleware = createSagaMiddleware()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(
  todoReducer,
  composeEnhancers(
    applyMiddleware(sagaMiddleware)
  )
)

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