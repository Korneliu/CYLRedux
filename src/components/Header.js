import React from 'react';
import NotesList from './NotesList';
import NoteListFilters from './NoteListFilters'

const Header = () => (
  <div>
    <h1>Check Your Luck</h1>
    <NoteListFilters />
    <NotesList />
  </div>
)

export default Header