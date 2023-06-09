import React from 'react'
import CreateNote from './pages/createNote'
import EditNote from './pages/editNote'
import HomePage from './pages/HomePage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App = () => {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/edit-note/:id" element={<CreateNote />} />
                    <Route path="/create-note" element={<EditNote />} />
                    <Route path="/" element={<HomePage />} />
                </Routes>
            </Router>


        </div>

    )
}

export default App;