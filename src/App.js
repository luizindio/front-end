import React, { Component } from 'react';
import HotelForm from './components/HotelForm'; // Importe o componente HotelForm


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Meu Aplicativo de Hotéis</h1>
        <HotelForm />
        
      </div>
    );
  }
}

export default App;
