import React from 'react'
import ReactDOM from 'react-dom'
import 'normalize.css/normalize.css'
import './styles/styles.scss';
import Header from './components/Header';
import configureStore from '../src/store/configureStore';
import { addNote } from './actions/notes';
import { setTextFilter } from './actions/filters';
import getNotes from '../src/selectors/notes';
import getNumbers from '../src/selectors/numbers';
import { generateRandomNumber, generateLuckyNumber } from './actions/numbers';
import { random } from '../src/selectors/notes'
import { Provider } from 'react-redux';



const store = configureStore()

store.subscribe(() => {
  const state = store.getState();
  const visibleNotes = getNotes(state.notes, state.filters, state.numbers)
  const visibleNumbers = getNumbers(state.numbers)
  console.log(visibleNotes, visibleNumbers)

})


store.dispatch(addNote({ comment: 'first try', numberOfTries: 2 }))
store.dispatch(generateRandomNumber(random));
//store.dispatch(generateLuckyNumber());




const template = (
  <div>
    <Provider store={store} />
    <Header />
  </div>
)

ReactDOM.render(template, document.getElementById('app'))


/*const demoState = {
  notes: [{
    note: {
      id: 'adsfas',
      comment: 'good day',
      numberOfTries: 8,
      createdAt: 1
    }
  }],
  filters: {
    text: 'good day',
    sortByNumberOfTries: 3,
    sortByDate: 8,
    startDate: undefined,
    endDate: undefined
  },
  numbers: {
    randomNumber: 3,
    luckyNumber: 6,
    numberOfTries
  }
}*/