import React from 'react'
import {Link} from 'react-router-dom'

export default function Erreur() {
   return (
      <div>
         <h1 className="display-4">Erreur 404 : Page non trouvée.</h1>
         <Link to="/liste" className="link">Revenir à l'accueil</Link>
      </div>
   )
}
