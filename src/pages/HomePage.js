import React from 'react'
import { CiSearch } from 'react-icons/ci'
import '../'

const HomePage = () => {
    return (
        <section>
            <header className={"notes__header"}>
                <h2>My Notes</h2>
                <input type="text" autofocus placeholder="Keyword ....." />
                <button className={"btn"}><CiSearch /></button>
            </header>
        </section>
    )
}

export default HomePage;