import React, {Component} from 'react';
import Titre from './Titre';

class App extends Component {

  state = {
    nom: 'Sebastien'
  }

  render() {

    return (
      <div className="App">
        <Titre nom={this.state.nom}>
        </Titre>
      </div>
    );
  }
}

export default App;
