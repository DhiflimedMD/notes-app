import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import NotesList from './components/NotesList';
import Search from './components/Search';
import Header from './components/Header';



const App = () => {
  const [notes , setnotes] = useState([
    {
      id: nanoid(),
      text: 'this is my 1 st note!',
      date: '15/04/2021',
    },
    {
      id: nanoid(),
      text: 'this is my 2 nd note!',
      date: '16/05/2021',
    },
    {
      id: nanoid(),
      text: 'this is my 3 rd note!',
      date: '18/07/2021',
    },
    {
      id: nanoid(),
      text: 'this is my 4 th note!',
      date: '20/07/2021',
    },
  ]);


  const [searchText, setSearchText] = useState('');
  const [darkMode , setDarkMode] = useState(false);

  useEffect(() => {
    const savedNotes = JSON.parse(
      localStorage.getItem('react-notes-app-data')
    );

    if (savedNotes) {
      setnotes(savedNotes);
    
      
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      'react-notes-app-data',
      JSON.stringify(notes)
    );
  },[notes]);

  const addNote = (text) => {
   const date = new Date();
   const newNote = {
    id: nanoid(),
    text: text,
    date: date.toLocaleDateString(),
   };
   const newNotes = [...notes, newNote];
   setnotes(newNotes);
  }

  const deleteNote = (id) => {
    const newNotes = notes.filter((note)=> note.id != id);
    setnotes(newNotes);
  }


  return (
    <div className={`${darkMode && 'dark-mode'}`}>
     <div className="container">
    <Header handleToggleDarkMode={setDarkMode}/>
    <Search handleSearchNote={setSearchText} />
    <NotesList 
    notes={notes.filter((note) => 
         note.text.toLocaleLowerCase().includes(searchText)
      )} 
    handleAddNote={addNote}
    handledeleteNote={deleteNote}
    />
    </div> 
    </div>
    
  );
}

export default App;
