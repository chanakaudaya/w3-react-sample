import React, { useState } from "react";
import ReactDOM from "react-dom";

function Room() {
  const [isLit, setLit] = useState(false);

  return (
    <div className="room">
      the room is {isLit ? "lit" : "dark"}
      <br />
      <button onClick={() => setLit(!isLit)}>flip</button>
    </div>
  );
}

export default Room;
