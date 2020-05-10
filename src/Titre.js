import React, { Component } from 'react'

export default class Titre extends Component {
    render() {
        return (
            <div>
                <h1>Notre titre depuis un autre composant.</h1>
                {this.props.nom}
                {this.props.children}
            </div>
        )
    }
}
