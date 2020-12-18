
export default (notes, { text, sortBy, startDate, endDate }) => {
  return notes.filter((note) => {
    const startDateMatch = typeof startDate !== 'number' || note.createdAt >= startDate;
    const endDateMatch = typeof endDate !== 'number' || note.createdAt <= endDate;
    const textMatch = note.comment.toLowerCase().includes(text.toLowerCase());
    return startDateMatch && endDateMatch && textMatch;
  }).sort((a, b) => {
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1
    } else if (sortBy === 'numberOfTries') {
      return a.sortByNumber < b.sortByNumber ? 1 : -1
    }
  })
}


