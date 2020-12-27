import React from 'react';
import { connect } from 'react-redux';
import { removeNote } from '../actions/notes';

const NoteListItem = ({ dispatch, id, comment, numberOfTries, createdAt }) => (
  <div>
    <h3>{comment}</h3>
    <p>{numberOfTries} - {createdAt}</p>
    <button onClick={() => {
      dispatch(removeNote({ id }))
    }}>Remove</button>
  </div>
);



export default connect()(NoteListItem);