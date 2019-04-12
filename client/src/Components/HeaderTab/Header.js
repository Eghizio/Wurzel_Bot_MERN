import React, { Component } from 'react'

export class Header extends Component {
  render() {
    return (
      <div style={style}>
        <h1>WurzelBot</h1>
      </div>
    )
  }
}

const style = {
    // color: "#fff",
    textAlign: "center",
    border: "5px solid pink",

    gridColumnStart: "1",
    gridColumnEnd: "4",
};

export default Header
