import React from 'react'
import {Link } from 'react-router-dom'
function Home() {
    return (
        <div>
            <h1>Este é o home</h1>
            <Link to='/musica'>Página [1] 'Musica'</Link>
            ----
            <Link to='/musica'>Página [2] 'Cidade'</Link>

        </div>
    )
}

export default Home;
