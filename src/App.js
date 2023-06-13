import React, { useState, useEffect } from 'react'
import CreateNote from './pages/createNote'
import EditNote from './pages/editNote'
import HomePage from './pages/HomePage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


const App = () => {
    const [Notes, setNotes] = useState(JSON.parse(localStorage.getItem('notes')) || [])
    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(Notes))
    }, [Notes])

    return (
        <div>
            <main id="app">
                <Router>
                    <Routes>
                        <Route path="/create-note" element={<CreateNote setter={setNotes} />} />
                        <Route path="/edit-note/:id" element={<EditNote notes={Notes} setter={setNotes} />} />
                        <Route path="/" element={<HomePage notes={Notes} />} />
                    </Routes>
                </Router>
            </main>



        </div>

    )
}

export default App;