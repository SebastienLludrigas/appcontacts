import React, { Component } from 'react'

export default class Contact extends Component {

   state = {
      show: true
   }

   // supprimeContact = () => {

   // }

   montrerContact = () => {
      this.setState({
         show: !this.state.show
      })
   }

   render() {  

      return (
         <div className="card card-body mb-3 text-center">
            <h4>{this.props.nom}&nbsp;<i className="fas fa-sort-down"
            style={{cursor: 'pointer'}}
            onClick={this.montrerContact}
            ></i>
            <i className="fas fa-times" 
            style={{color: 'red', float: 'right', cursor: 'pointer'}}
            onClick={this.props.supprimeContact}
            ></i>
            </h4>
            
            <ul className="card card-body mb-3 test" style={{display: this.state.show ? 'block' : 'none'}}>
               <li className="list-group-item">
                  Email : {this.props.email}
               </li>
               <li className="list-group-item">
                  Téléphone : {this.props.tel}
               </li>
            </ul>
         </div>
      )
   }
}
