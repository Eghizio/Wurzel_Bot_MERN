import React from 'react'

const Footer = () => {
    return (
      <footer style={style}>
        <h3>Footer &copy; Eghizio</h3>
      </footer>
    )
};

const style = {
    textAlign: "center",
    border: "5px solid purple",

    gridColumnStart: "1",
    gridColumnEnd: "4",
};

export default Footer;
