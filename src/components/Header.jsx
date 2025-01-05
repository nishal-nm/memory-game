import React from "react";
import "../styles/Header.css";

function Header(props) {
  return (
    <div className="header">
      <h1>MEMORY GAME</h1>
      <h3>Moves: {props.count}</h3>
    </div>
  );
}

export default Header;
