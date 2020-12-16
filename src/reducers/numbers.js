
const numbersDefaultReducer = {
  randomNumber: 0,
  luckyNumber: 0
}

export default (state = numbersDefaultReducer, action) => {
  switch (action.type) {
    case 'GENERATE_RANDOM_NUMBER':
      return {
        ...state,
        randomNumber: Math.floor(Math.random() * 10)
      }
    default:
      return state

  }
}

/* const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  sortByNumber: 'numberOfTries',
  startDate: undefined,
  endDate: undefined
};

export default (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text
      } */