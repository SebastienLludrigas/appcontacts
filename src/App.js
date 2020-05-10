import React, { Component } from 'react';
import Titre from './Titre';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Titre nom='Hugo'/>
        <Titre nom='Jules'/>
        Hello World
        <Titre nom='Eva'/>
      </div>
    );
  }

}
  
export default App;
