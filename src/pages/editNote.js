import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { RiDeleteBin6Fill } from 'react-icons/ri'

const EditNote = () => {
    return (
        <section>
            <header className="create-note__header">
                <Link to="/" className="btn"><AiOutlineArrowLeft /></Link>
                <button className="btn lg primary">Save</button>
                <button className="btn danger">< RiDeleteBin6Fill /></button>
            </header>
            <form className="create-note__form">
                <input type="text" placeholder="Title" autoFocus />
                <textarea rows="20" placeholder="Note details..." />

            </form>
        </section>
    )
}

export default EditNote;