import React from 'react'
import ReactDOM from 'react-dom'
import 'normalize.css/normalize.css'
import './styles/styles.scss';
import Header from './components/Header';
import { addNote, removeNote } from './actions/notes';
import { Provider } from 'react-redux';
import configureStore from '../src/store/configureStore';




const store = configureStore()

const state = store.getState();


store.subscribe(() => {
  console.log(store.getState())
})

const noteOne = store.dispatch(addNote({ comment: 'Good Day', numberOfTries: 3 }));
const noteTwo = store.dispatch(addNote({ comment: 'Bad day', numberOfTries: 6 }));

store.dispatch(removeNote({ id: noteOne.note.id }))




const template = (
  <div>
    <Provider store={store} />
    <Header />
  </div>
)

ReactDOM.render(template, document.getElementById('app'))



/*
const person = {
  name: 'Max',
  age: 43,
  location: {
    city: 'Aliso',
    //temp: 92
  }
}


const { name, age } = person
const { city, temp: temperature = 10 } = person.location;

console.log(name, age)
console.log(city, temperature)

const bookStore = ['verne', 'eco', 'lem']

const [old, , scifi] = bookStore

console.log(old, scifi)


  / Reducers
// 1. Reducers are pure functions
// 2. Never change state or action

const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy
      };
    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy
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
}



const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: 'INCREMENT',
  incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: 'DECREMENT',
  decrementBy
})

const setCount = ({ count } = {}) => ({
  type: 'SET',
  count
})

const resetCount = () => ({
  type: 'RESET'
})

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
})


store.dispatch(decrementCount({ decrementBy: 30 }))

store.dispatch(setCount({ count: 101 }));
store.dispatch(resetCount());


*/