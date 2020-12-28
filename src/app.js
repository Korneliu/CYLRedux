import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'normalize.css/normalize.css'
import './styles/styles.scss';
import configureStore from '../src/store/configureStore';
import Header from './components/Header';
import { addNote } from './actions/notes';
import { setTextFilter } from './actions/filters';
import getNotes from '../src/selectors/notes';
import getNumbers from '../src/selectors/numbers';
import { generateRandomNumber, generateLuckyNumber } from './actions/numbers';




const store = configureStore()

store.subscribe(() => {
  const state = store.getState();
  const visibleNotes = getNotes(state.notes, state.filters)
  const visibleNumbers = getNumbers(state.numbers)
  console.log(visibleNotes, visibleNumbers)
})



store.dispatch(addNote({ comment: 'awesome day', numberOfTries: 1 }))
store.dispatch(addNote({ comment: 'so so day', numberOfTries: 12, createdAt: 2000 }))
store.dispatch(addNote({ comment: 'great day', numberOfTries: 3, createdAt: 3000 }))
store.dispatch(addNote({ comment: 'good day', numberOfTries: 6, createdAt: 1000 }))
store.dispatch(setTextFilter('awesome'));

setTimeout(() => {
  store.dispatch(setTextFilter('good'))
}, 3000);

/* store.dispatch(generateRandomNumber());
store.dispatch(generateLuckyNumber());
 */






const template = (
  <div>
    <Provider store={store}>
      <Header />
    </Provider>
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