import { v4 as uuidv4 } from 'uuid';


export const addNote = (
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
});

