import React, { useState, useEffect } from 'react'
import { CiSearch } from 'react-icons/ci'
import { Link } from 'react-router-dom'
import { BsFillPlusCircleFill } from 'react-icons/bs'
import NoteItem from '../components/NoteItem'


const HomePage = ({ notes }) => {
    const [showSearch, setShowSearch] = useState(false)
    const [text, setText] = useState('')
    const [filteredNotes, setFilteredNotes] = useState(notes)
    const search = (e) => {
        setText(e.target.value)
    }
    const handleSearch = () => {
        // search(e)


        const filteredNote = notes.filter((note) => {
            let noted
            // if (note.title.toLowerCase().match(text.toLowerCase())) {
            //     noted = note
            // }
            if (note.title.toLowerCase().startsWith(text.toLowerCase())) {
                noted = note
            }
            return noted
        })

        setFilteredNotes(filteredNote)


    }
    useEffect(handleSearch, [text])
    return (
        <section>
            <header className={"notes__header"}>
                {!showSearch && <h2>My Notes</h2>}
                {showSearch && <input type="text" autofocus value={text} onChange={(e) => {
                    setText(e.target.value);
                    handleSearch()
                }} placeholder="Keyword ....." />}
                <button className={"btn"} onClick={() => setShowSearch(prev => !prev)}><CiSearch /></button>
            </header>
            <div className="notes__container">
                {
                    filteredNotes.map(note => <NoteItem key={note.id} note={note} />)
                }
            </div>
            <Link className="btn add__btn" to="/create-note"><BsFillPlusCircleFill /></Link>
        </section>
    )
}

export default HomePage;