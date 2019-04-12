import React, { Component } from 'react'

export class Info extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectedField: null //what about multiple selection?
    };
  }

  render() {
    const {selectedField: id} = this.state;

    return (
      <div style={style}>
        <h2> {id ? `Field ${id}` : "Garden"} </h2>
      </div>
    )
  }
}

const style = {
    border: "5px solid red",
    textAlign: "center"
};

export default Info;
