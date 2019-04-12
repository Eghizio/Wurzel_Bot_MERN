import React, { Component } from 'react'

export class Info extends Component {
  render() {
    return (
      <div style={style}>
        <h2>Info</h2>
      </div>
    )
  }
}

const style = {
    border: "5px solid red",
    textAlign: "center"
};

export default Info;
