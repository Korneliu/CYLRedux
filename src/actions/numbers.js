
export const generateRandomNumber = (
  {
    randomNumber = 0,
    luckyNumber = 0,
    numberOfTries = 0
  } = {}
) => ({
  type: 'GENERATE_RANDOM_NUMBER',
  number: {
    randomNumber: 3333
  }
})

/* export const addNote = (
  {
    comment = '',
    numberOfTries = 0,
    createdAt = 0
  } = {}
) => ({
  type: 'ADD_NOTE',
  note: {
    id: uuidv4(),
    comment,
    numberOfTries,
    createdAt
  }
}); */