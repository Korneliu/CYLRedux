import React from 'react'
import ReactDOM from 'react-dom'
import 'normalize.css/normalize.css'
import './styles/styles.scss';
import Header from './components/Header';
import { addNote, removeNote, editNote } from './actions/notes';
import { setTextFilter, sortByDate, sortByNumberOfTries, setStartDate, setEndDate } from './actions/filters';
import { generateRandomNumber, generateLuckyNumber } from './actions/numbers';
import { Provider } from 'react-redux';
import configureStore from '../src/store/configureStore';


const getNotes = (notes, { text, setTextFilter, sortBy, sortByNumber, startDate, endDate }) => {
  return notes.filter((note) => {
    const startDateMatch = typeof startDate !== 'number' || note.createdAt >= startDate;
    const endDateMatch = typeof endDate !== 'number' || note.createdAt <= endDate;
    const textMatch = note.comment.toLowerCase().includes(text.toLowerCase());
    return startDateMatch && endDateMatch && textMatch;
  }).sort((a, b) => {
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1
    } else if (sortBy === 'numberOfTries') {
      return a.sortByNumber < b.sortByNumber ? 1 : -1
    }
  })
}

const store = configureStore()


store.subscribe(() => {
  const state = store.getState();
  const visibleNotes = getNotes(state.notes, state.filters, state.numbers)
  //console.log(visibleNotes)
  console.log(state)
})


/* const noteOne = store.dispatch(addNote({ comment: 'Good Day', numberOfTries: 4, createdAt: -22000 }));
const noteTwo = store.dispatch(addNote({ comment: 'Bad day', numberOfTries: 6, createdAt: -1000 })); */

store.dispatch(generateRandomNumber());
store.dispatch(generateLuckyNumber())
/*store.dispatch(removeNote({ id: noteOne.note.id }))
store.dispatch(editNote(noteTwo.note.id, { numberOfTries: 10 }))*/

//store.dispatch(setTextFilter('good'));
/*store.dispatch(setTextFilter());


store.dispatch(sortByDate());*/
//store.dispatch(sortByNumberOfTries());


//store.dispatch(setStartDate(125));
//store.dispatch(setStartDate(10));

//store.dispatch(setEndDate(999));



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