import { createStore, combineReducers } from 'redux';
import numbersReducer from '../reducers/numbers';
import notesReducer from '../reducers/notes';
import filtersReducer from '../reducers/filters';


export default () => {
  const store = createStore(
    combineReducers({
      notes: notesReducer,
      numbers: numbersReducer,
      filters: filtersReducer
    }),
    //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
};


