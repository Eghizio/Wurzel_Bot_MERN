import React, { Component } from 'react'

export class Footer extends Component {
  render() {
    return (
      <footer style={style}>
        <h3>Footer &copy; Eghizio</h3>
      </footer>
    )
  }
}

const style = {
    textAlign: "center",
    border: "5px solid purple",

    gridColumnStart: "1",
    gridColumnEnd: "4",
};

export default Footer;
