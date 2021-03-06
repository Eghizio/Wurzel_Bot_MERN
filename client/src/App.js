import React, { Component } from 'react';
import Header from './Components/HeaderTab/Header';
import Inventory from './Components/InventoryTab/Inventory';
import Garden from './Components/GardenTab/Garden';
import Info from './Components/InfoTab/Info';
import Footer from './Components/FooterTab/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div style={gridContainer}>
        <Header/>

        <Inventory/>
        <Garden/>
        <Info/>

        <Footer/>
      </div>
    );
  }
}

const gridContainer = {
  display: "grid",
  gridTemplateColumns: "1fr 3fr 1fr",
  gridTemplateRows: "1fr 6fr 1fr",
    
  gridGap: "2em",
  justifyContent: "space-evenly"
};

export default App;
