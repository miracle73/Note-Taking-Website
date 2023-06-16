import React from 'react'
import { Link } from 'react-router-dom'

const NoteItem = ({ note }) => {
    return (
        <div>
            <Link to={`/edit-note/${note.id}`} className="note">
                <h4>{note.title.length > 10 ? note.title.substr(0, 10) + '...' : note.title}</h4>
                <p>{note.details.length > 10 ? note.details.substr(0, 10) + '...' : note.details}</p>
                {/* <p>{note.date}</p> */}

            </Link>
        </div>

    )
}
export default NoteItem