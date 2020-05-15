import React, { Component } from 'react'
import Contact from './Contact'

export default class Liste extends Component {

   state = {
      contacts: [
         {
            id: 1,
            nom: 'John Doe',
            email: 'john@gmail.com',
            tel: "555-555-5555"
         },
         {
            id: 2,
            nom: 'John Doe',
            email: 'john@gmail.com',
            tel: "555-555-5555"
         },
         {
            id: 3,
            nom: 'John Doe',
            email: 'john@gmail.com',
            tel: "555-555-5555"
         }
      ]
   }

   render() {
      return (
         <div>
            {this.state.contacts.map(contact => (
               <Contact
               key={contact.id}
               nom={contact.nom}
               email={contact.email}
               tel={contact.tel}
               />
            ))}
         </div>
      )
   }
}
