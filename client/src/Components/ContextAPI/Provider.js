import React, { Component } from 'react'

const storeContext = React.createContext();
export const Consumer = storeContext.Consumer;

export class Provider extends Component {
    constructor(props){
        super(props);
        this.state = {
            //selectedItem should be an empty obj, then fetched item
            //but {} != null so i guess it doesnt matter if its null
            //it shifts from obj to null
            selectedItem: null,
            select: this.handleClick
        };
    }

    //should just copy the state of the clicked obj(element state) //work in prog
    handleClick = async (itemState) => {
      await this.setState({ selectedItem: itemState });
      console.log("Context changed:", this.state);
    }

    componentDidMount(){
      console.log("Initial Context:", this.state);
    }

  render() {
    return (
      <storeContext.Provider value={ this.state } >
        { this.props.children }
      </storeContext.Provider>
    )
  }
}