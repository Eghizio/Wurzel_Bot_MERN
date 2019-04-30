import React, { Component } from 'react'

const storeContext = React.createContext();
export const Consumer = storeContext.Consumer;

export class Provider extends Component {
    constructor(props){
        super(props);
        this.state = {
            selectedItem: {
              type: null
            },
            select: this.handleClick
        };
    }

    //should just copy the state of the clicked obj(element state)
    handleClick = async (itemState) => {
      await this.setState({ selectedItem: itemState });
      console.log("Context changed:", this.state.selectedItem);//debug
    }

    componentDidMount(){
      console.log("Initial Context:", this.state.selectedItem);//debug
    }

  render() {
    return (
      <storeContext.Provider value={ this.state } >
        { this.props.children }
      </storeContext.Provider>
    )
  }
}