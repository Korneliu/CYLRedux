import React from 'react'
import ReactDOM from 'react-dom'
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import Header from '../src/components/Header';
import { createStore } from 'redux';

const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1
      return {
        count: state.count + incrementBy
      };
    case 'DECREMENT':
      const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1
      return {
        count: state.count - decrementBy
      };
    case 'SET':
      return {
        count: action.count
      }
    case 'RESET':
      return {
        count: 0
      };
    default:
      return state
  }
});

console.log(store.getState());

store.subscribe(() => {
  console.log(store.getState());
})

store.dispatch({
  type: 'INCREMENT',
  incrementBy: 5
});

store.dispatch({
  type: 'INCREMENT'
});

store.dispatch({
  type: 'RESET'
});

store.dispatch({
  type: 'DECREMENT',
  decrementBy: 10
});

store.dispatch({
  type: 'SET',
  count: 101
})

const template = (
  <div>
    <Header />
  </div>
)

ReactDOM.render(template, document.getElementById('app'))

