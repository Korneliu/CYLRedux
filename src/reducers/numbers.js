
const numbersDefaultReducer = {
  randomNumber: 0,
  luckyNumber: 0,
  numberOfTries: 0
}

export default (state = numbersDefaultReducer, action) => {
  switch (action.type) {
    case 'GENERATE_RANDOM_NUMBER':
      return {
        ...state,
        randomNumber: Math.ceil(Math.random() * 10)
      }
    case 'GENERATE_LUCKY_NUMBER':
      return {
        ...state,
        luckyNumber: Math.ceil(Math.random() * 10)
      }
    default:
      return state
  }
}

