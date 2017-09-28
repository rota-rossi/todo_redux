import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';

import todoReducer from './store/reducers'
import epics from './store/epics'

import TodoList from './TodoList'


const epicMiddleware = createEpicMiddleware(epics)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(
  todoReducer,
  composeEnhancers(
    applyMiddleware(epicMiddleware)
  )
)


export default class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <TodoList />
      </Provider>
    )
  }
}