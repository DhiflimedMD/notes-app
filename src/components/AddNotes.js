import {useState} from 'react'

const AddNotes = ({handleAddNote}) => {

    const [noteText , setnoteText] = useState('');
    const characterLimit = 200;

    const handleChange = (event) => {
        if (characterLimit - event.target.value.length >= 0) {
           setnoteText(event.target.value);  
        }
       
    };

    const handleSaveClick = () => {
        if(noteText.trim().length > 0) {
            handleAddNote(noteText);
            setnoteText('');
        }
      
    }
  return (
    <div className="note new">
        <textarea 
        cols="10" 
        rows="8" 
        value={noteText}
        placeholder='Type to add a node...'
        onChange={handleChange}
        ></textarea>
        <div className="note-footer">
            <small>{characterLimit - noteText.length} Remaining</small>
            <button className="save" onClick={handleSaveClick}>Save</button>
        </div>
    </div>
  )
}

export default AddNotes