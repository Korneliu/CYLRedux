
const filtersReducerDefaultState = {
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
      }
    case 'SORT_BY_NUMBER_OF_TRIES':
      return {
        ...state,
        sortByNumberOfTries: 'numberOfTries'
      }
    case 'SET_START_DATE':
      return {
        ...state,
        startDate: action.startDate
      }
    case 'SET_END_DATE':
      return {
        ...state,
        endDate: action.endDate
      }
    default:
      return state;
  }
}
