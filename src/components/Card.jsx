import React from "react";
import "../styles/Card.css"; // Add styles later

function Card(props) {
  return (
    <div
      className={`card ${props.flipped ? "flipped" : ""}`}
      onClick={props.onClick}
    >
      {props.flipped ? props.value : "❓"}
    </div>
  );
}

export default Card;
