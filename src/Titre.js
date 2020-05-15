import React from 'react'
import PropTypes from 'prop-types'
import './Titre.css'

export default function Titre(props) {
    return (
        <div>
            <h1>Bonjour je m'appelle {props.nom}.</h1>
            <p className="text-primary">Mon texte</p>
        </div>
    )
}

Titre.propTypes = {
    nom: PropTypes.string.isRequired
}
