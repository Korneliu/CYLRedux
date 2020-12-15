

const numbersReducerDefaultState = {
  randomNumber: 0,
  luckyNumber: 0,
  numberOfTries: 0,
};

export default (state = numbersReducerDefaultState, action) => {
  switch (action.type) {
    case 'GENERATE_RANDOM_NUMBER':
      return {
        state,
        randomNumber: 33333
      }

    default:
      return state
  }
}