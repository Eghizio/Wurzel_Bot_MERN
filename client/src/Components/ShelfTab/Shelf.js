import React, { Component } from 'react'

export class Shelf extends Component {
  render() {
    return (
      <div style={style}>
        <h2>Shelf</h2>
      </div>
    )
  }
}

const style = {
    border: "5px solid blue",
    textAlign: "center"
};

export default Shelf;
