import React from 'react'

export default function Titre(props) {
   return (      
    <div>
         <h1>Notre titre depuis un autre composant.</h1>
         {props.nom}
      </div>    
   )
}
