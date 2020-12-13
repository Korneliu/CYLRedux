import React from 'react'
import ReactDOM from 'react-dom'
import 'normalize.css/normalize.css'
import './styles/styles.scss';
import Header from './components/Header';
import { addNote, removeNote, editNote } from './actions/notes';
import { setTextFilter, sortByDate, sortByNumberOfTries, setStartDate, setEndDate } from './actions/filters';
import { Provider } from 'react-redux';
import configureStore from '../src/store/configureStore';


const store = configureStore()

const state = store.getState();


store.subscribe(() => {
  console.log(store.getState())
})

/* const noteOne = store.dispatch(addNote({ comment: 'Good Day', numberOfTries: 3 }));
const noteTwo = store.dispatch(addNote({ comment: 'Bad day', numberOfTries: 6 }));

store.dispatch(removeNote({ id: noteOne.note.id }))
store.dispatch(editNote(noteTwo.note.id, { numberOfTries: 10 }))

store.dispatch(setTextFilter('whatever'));
store.dispatch(setTextFilter());


store.dispatch(sortByDate());
store.dispatch(sortByNumberOfTries());
 */

store.dispatch(setStartDate(125));
store.dispatch(setStartDate(10));

store.dispatch(setEndDate(35));



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