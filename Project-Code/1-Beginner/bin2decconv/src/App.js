import React from "react";
import { useState, useEffect } from "react";

const App = () => {
  const [input, updateInput] = useState("");
  const [decimalAns, updateAns] = useState(0);

  const convertBinary = () => {
    let decSum = 0;
    for (let i = 0; i < input.length; i++) {
      const binary = input[i];
      if (parseInt(binary) % 2 === 1) {
        decSum += (2 ** (input.length - (i + 1)));
      }
    }
    updateAns(decSum);
};

  return (
      <div>
          <h1>Binary to Decimal Converter</h1>
          <input value={input} onChange={(e) => updateInput(e.target.value.toString())}></input>
          <button onClick={() => convertBinary()}>Convert</button>
          <p>{decimalAns}</p>
      </div>
  )
}

export default App;
