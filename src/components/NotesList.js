import React from 'react';
import { connect } from 'react-redux';

const NotesList = (props) => (
  <div>
    <h1>Notes List</h1>
    {props.notes.length}
  </div>
);

const ConnectedNotesList = connect((state) => {
  return {
    notes: state.notes
  }
})(NotesList);


export default ConnectedNotesList;