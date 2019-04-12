import React, { Component } from 'react';
import Garden from './Components/GardenTab/Garden';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <h1 style={style}>WurzelBot</h1>
        <Garden/>
      </div>
    );
  }
}

const style = {
  color: "#fff",
  textAlign: "center"
};

const gridContainer = {

};

export default App;
