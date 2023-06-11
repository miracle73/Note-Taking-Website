import React, { useState } from 'react'
import CreateNote from './pages/createNote'
import EditNote from './pages/editNote'
import HomePage from './pages/HomePage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import DummyNotes from './dummy_notes'

const App = () => {
    const [Notes] = useState(DummyNotes)
    return (
        <div>
            <main id="app">
                <Router>
                    <Routes>
                        <Route path="/create-note" element={<CreateNote />} />
                        <Route path="/edit-note/:id" element={<EditNote />} />
                        <Route path="/" element={<HomePage notes={Notes} />} />
                    </Routes>
                </Router>
            </main>



        </div>

    )
}

export default App;