import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import todoReducer from './store/reducers'
import TodoList from './TodoList'


let store = createStore(todoReducer)


export default class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <TodoList />
      </Provider>
    )
  }
}