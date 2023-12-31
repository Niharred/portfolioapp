
import Note from './Note.js'

const NotesList =({notes})=>{
    return(
        <div className="notes-list">
            {notes.map(note=> (
            <Note id={note.id}
            text = {note.text}
            date = {note.date}/>))}
        </div>
    )

}

export default NotesList;