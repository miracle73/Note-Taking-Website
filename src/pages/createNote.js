import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import DummyNotes from '../dummy_notes'

const CreateNote = () => {
    const [Title, setTitle] = useState("")
    const [Details, setDetails] = useState("")

    const onFormSubmit = (e) => {
        e.preventDefault();

        if (Title && Details) {
            console.log(Title, Details)
            DummyNotes.push({ id: DummyNotes.length + 1, title: Title, details: Details, date: new Date(Date.now()) })
        }

    }
    return (

        <section>
            <header className="create-note__header">
                <Link to="/" className="btn"><AiOutlineArrowLeft /></Link>
                <button className="btn lg primary" onClick={onFormSubmit}>Save</button>
            </header>
            <form className="create-note__form" onSubmit={onFormSubmit}>
                <input type="text" placeholder="Title" autoFocus onChange={(e) => setTitle(e.target.value)} />
                <textarea rows="20" placeholder="Note details..." onChange={(e) => setDetails(e.target.value)} />

            </form>
        </section>
    )
}

export default CreateNote;