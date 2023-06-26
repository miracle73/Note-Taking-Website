import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import CreateDate from '../components/useCreateDate'
import { v4 as uuidv4 } from 'uuid'

const CreateNote = ({ setter }) => {
    const [Title, setTitle] = useState("")
    const [Details, setDetails] = useState("")
    const navigate = useNavigate()
    const ID = uuidv4();

    const onFormSubmit = (e) => {
        e.preventDefault();

        if (Title || Details) {
            const data = { id: ID, title: Title, details: Details, date: CreateDate() }
            setter((prevData) => [data, ...prevData])
            navigate('/')
        }

    }
    return (

        <section>
            <header className="create-note__header">
                <Link to="/" className="btn"><AiOutlineArrowLeft /></Link>
                <button className="btn lg primary" onClick={onFormSubmit}>Save</button>
            </header>
            <form className="create-note__form" onSubmit={onFormSubmit}>
                <input id="text" type="text" placeholder="Title" autoFocus onChange={(e) => setTitle(e.target.value)} />
                <textarea id="textarea" rows="20" placeholder="Note details..." onChange={(e) => setDetails(e.target.value)} />

            </form>
        </section>
    )
}

export default CreateNote;