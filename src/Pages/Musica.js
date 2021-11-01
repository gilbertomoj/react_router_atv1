import React from 'react'
import {Link } from 'react-router-dom'

function Musica() {
    return (
        <div>
            <h1>Esta é a página de música</h1>
            <img src='https://m.media-amazon.com/images/I/51qn9QJv1gL.jpg' alt="musica"/>
            <h1>The Pied Piper - Crispian st. Peters</h1>
            <hr/>
            <Link to='/cidade'>Proxima página 'Cidade'</Link>
            -------------------------------------------------
            <Link to='/'>Página anterior 'Home'</Link>
        </div>
    )
}

export default Musica
