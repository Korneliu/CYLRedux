import React from 'react';

const NoteListItem = ({ comment, numberOfTries, createdAt }) => (
  <div>
    <h3>{comment}</h3>
    <p>{numberOfTries} - {createdAt}</p>
  </div>
);

export default NoteListItem;