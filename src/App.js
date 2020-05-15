import React, { Component } from 'react';
import Titre from './Titre';
import 'bootstrap/dist/css/bootstrap.min.css'

class App extends Component {

  state = {
    nom1: "Hugo",
    nom2: "Jules",
    nom3: "Eva"
  }

  render() {
    return (
      <div className="App">
        <Titre nom={this.state.nom1}/>
        <Titre nom={this.state.nom2}/>
        <Titre nom={this.state.nom3}/>
      </div>
    );
  }

}
  
export default App;
