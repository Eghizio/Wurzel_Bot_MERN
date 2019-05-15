import React from 'react'

const Header = () => {
    return (
      <header style={style}>
        <h1>WurzelBot</h1>
      </header>
    )
};

const style = {
    // color: "#fff",
    textAlign: "center",
    border: "5px solid pink",

    gridColumnStart: "1",
    gridColumnEnd: "4",
};

export default Header;
