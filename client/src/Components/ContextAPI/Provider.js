import React, { Component } from 'react'

const storeContext = React.createContext();
export const Consumer = storeContext.Consumer;

export class Provider extends Component {
    constructor(props){
        super(props);
        this.state = {
            selectedField: null,
            handleClick: this.handleClick
        };
    }

    handleClick = async (id) => await this.setState({ selectedField: id });

  render() {
    return (
      <storeContext.Provider value={ this.state } >
        { this.props.children }
      </storeContext.Provider>
    )
  }
}