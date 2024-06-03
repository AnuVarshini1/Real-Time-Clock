import React, { useState } from "react";
import ReactDOM from "react-dom";
var year = 2024;

function App() {
  const d = new Date();
  var time = d.toLocaleTimeString();

  var [count, setCount] = useState(time);

  function times() {
    const d = new Date();
    var time = d.toLocaleTimeString();
    count = time;
    setCount(count);
  }

  return (
    <div className="main">
      <h1> CLOCK APP </h1>
      <h1 className="head">{count}</h1>
      <button onClick={times}>GET TIME</button>
      {setInterval(times, 1000)}
    </div>
  );
}

export default App;
