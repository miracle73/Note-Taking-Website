import React, { useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { RiDeleteBin6Fill } from 'react-icons/ri'
import createDate from '../components/useCreateDate'

const EditNote = ({ notes, setter }) => {
    const navigate = useNavigate()
    const { id } = useParams();
    console.log(id)
    let note;
    for (let i = 0; i < notes.length; i++) {
        if (notes[i].id === id) {
            note = notes[i]
            console.log(note)
        }
    }
    const [title, setTitle] = useState(note.title)
    const [details, setDetails] = useState(note.details)
    console.log(title, details)
    const onChangeTitle = (e) => {
        setTitle(e.target.value)

    }
    const onChangeDetails = (e) => {
        setDetails(e.target.value)

    }
    const notee = { id, title, details, date: createDate() }

    const onSubmit = (e) => {
        e.preventDefault()

        setter((prevNotes) => {
            const updatedNotes = prevNotes.map((noteItem) => {
                if (noteItem.id === id) {
                    noteItem.title = title;
                    noteItem.details = details;
                    noteItem.date = createDate();
                }
                return noteItem
            });
            console.log(updatedNotes)
            let noted
            for (let i = 0; i < prevNotes.length; i++) {
                if (prevNotes[i].id === id) {
                    noted = prevNotes.splice(i, 1)
                    console.log(noted)
                }
            }
            return [...noted, ...prevNotes];
        });
        navigate('/')
    };



    return (
        <section>
            <header className="create-note__header">
                <Link to="/" className="btn"><AiOutlineArrowLeft /></Link>
                <button className="btn lg primary" onClick={onSubmit}>Save</button>
                <button className="btn danger">< RiDeleteBin6Fill /></button>
            </header>
            <form className="create-note__form" onSubmit={onSubmit}>
                <input type="text" placeholder="Title" value={title} onChange={onChangeTitle} autoFocus />
                <textarea rows="20" placeholder="Note details..." value={details} onChange={onChangeDetails} />

            </form>
        </section>
    )
}

export default EditNote;