import React from 'react'
import {Link } from 'react-router-dom'

function Cidade() {
    return (
        <div>
            <h1>Este é a página de cidade</h1>
            <img src='https://www.momondo.com.br/discover/wp-content/uploads/sites/282/2016/10/18aecb69-8b99-3205-88f4-388967dada55.jpg' alt="cidade"/>.
            <h1>Ilhas galapagos - Caribe</h1>
            <hr/>
            <Link to='/'>Proxima página 'Home'</Link>
            ------------
            <Link to='/musica'>Anterior 'Musica'</Link>

        </div>
    )
}

export default Cidade
