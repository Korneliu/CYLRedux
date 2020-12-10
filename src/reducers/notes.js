
const notesReducerDefaultState = [];

export default (state = notesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_NOTE':
      return state.concat(action.note);
    default:
      return state;
  }
};
