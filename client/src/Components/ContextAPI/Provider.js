import React, { Component } from 'react'

const storeContext = React.createContext();
export const Consumer = storeContext.Consumer;

export class Provider extends Component {

    state = {
        selectedField: null
    };

  render() {
    return (
      <storeContext.Provider value={ this.state } >
        { this.props.children }
      </storeContext.Provider>
    )
  }
}