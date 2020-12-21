import React from 'react';
import { connect } from 'react-redux';
import notes from '../reducers/notes';
import NoteListItem from './NoteListItem';
import selectNotes from '../selectors/notes';

const NotesList = (props) => (
  <div>
    <h1>Notes List</h1>
    {props.notes.map((note) => {
      return <NoteListItem key={note.id}{...note} />
    })}
    <h2>Numbers</h2>
    <p>Random Number: {props.numbers.randomNumber}</p>
    <p>Lucky Number: {props.numbers.luckyNumber}</p>
  </div>
);

const mapStateToProps = (state) => {
  return {
    notes: selectNotes(state.notes, state.filters),
    numbers: state.numbers
  };
};

export default connect(mapStateToProps)(NotesList);

