import React from "react";
import { useState, useEffect } from "react";
import ReactDOM from "react-dom";

const App = () => {
    const [input, updateInput] = useState("");
    const [decimalAns, updateAns] = useState("");

    const convertBinary = (binary) => {
        binary = binary.toString();
        let decSum = 0;
        for(let i = 0; i < binary.length; i++) {
            decSum += binary[i]**2;
        }
        updateAns(decSum);
    }

    return (
        <div>
            <h1>Binary to Decimal Converter</h1>
            <input value={input} onChange={(e) => updateInput(e.target.value)}></input>
            <button onClick={() => convertBinary({input})}>Convert</button>
        </div>
    )
}
ReactDOM.render(
    <App />,
    document.getElementById("root")
);
