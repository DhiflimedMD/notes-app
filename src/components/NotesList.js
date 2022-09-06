import React from 'react'
import AddNotes from './AddNotes';
import Note from './Note'

const NotesList = ({notes, handleAddNote, handledeleteNote}) => {
  return (
    <div className="notes-list">
      {notes.map((note) => (
        <Note 
            id={note.id} 
            text={note.text} 
            date={note.date}
            handledeleteNote={handledeleteNote} />
      ))}
      <AddNotes handleAddNote={handleAddNote}/>
    </div>
  )
}

export default NotesList;