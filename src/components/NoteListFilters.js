import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByDate, sortByNumberOfTries } from '../actions/filters';

const NoteListFilters = (props) => (
  <div>
    <input
      type="text"
      value={props.filters.text}
      onChange={(e) => {
        props.dispatch(setTextFilter(e.target.value))
      }} />
    <select
      value={props.filters.sortBy}
      onChange={(e) => {
        if (e.target.value === 'date') {
          props.dispatch(sortByDate());
        } else if (e.target.value === ' numberOfTries') {
        }
        props.dispatch(sortByNumberOfTries())
      }}
    >
      <option value="date">Date</option>
      <option value="numberOfTries">Number of Tries</option>
    </select>
  </div >
)

const mapStateToProps = (state) => {
  return {
    filters: state.filters
  }
}

export default connect(mapStateToProps)(NoteListFilters);