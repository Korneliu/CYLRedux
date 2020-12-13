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

export const removeNote = ({ id } = {}) => ({
  type: 'REMOVE_NOTE',
  id
})

export const editNote = (id, updates) => ({
  type: 'EDIT_NOTE',
  id,
  updates
})

