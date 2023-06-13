import React from 'react'
import { CiSearch } from 'react-icons/ci'
import { Link } from 'react-router-dom'
import { BsFillPlusCircleFill } from 'react-icons/bs'
import NoteItem from '../components/NoteItem'


const HomePage = ({ notes }) => {
    return (
        <section>
            <header className={"notes__header"}>
                <h2>My Notes</h2>
                {/* <input type="text" autofocus placeholder="Keyword ....." /> */}
                <button className={"btn"}><CiSearch /></button>
            </header>
            <div className="notes__container">
                {
                    notes.map(note => <NoteItem key={note.id} note={note} />)
                }
            </div>
            <Link className="btn add__btn" to="/create-note"><BsFillPlusCircleFill /></Link>
        </section>
    )
}

export default HomePage;