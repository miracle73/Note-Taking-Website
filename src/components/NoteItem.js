import React from 'react'
import { Link } from 'react-router-dom'

const NoteItem = ({ note }) => {
    return (
        <div>
            <Link to={`/edit-note/${note.id}`} className="note">
                <h4>{note.title.length > 20 ? note.title.substr(0, 20) + '...' : note.title}</h4>
                <p>{note.title.details > 40 ? note.title.substr(0, 40) + '...' : note.title}</p>

            </Link>
        </div>

    )
}
export default NoteItem