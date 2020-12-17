
export const generateRandomNumber = (randomNumber = 0) => ({
  type: 'GENERATE_RANDOM_NUMBER',
  randomNumber
})
export const generateLuckyNumber = (luckyNumber = 0) => ({
  type: 'GENERATE_LUCKY_NUMBER',
  luckyNumber
})

