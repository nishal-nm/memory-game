import React, { useState } from "react";
import GameBoard from "./components/GameBoard";
import Header from "./components/Header";

function App() {
  const [count, setCount] = useState(0);

  function incrementCount() {
    setCount((prevValue) => {
      return prevValue + 1;
    });
  }

  return (
    <div>
      <Header count={count} />
      <GameBoard counter={incrementCount} />
    </div>
  );
}

export default App;
