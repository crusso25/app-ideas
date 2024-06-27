import './App.css';
import {useState, useEffect} from "react";

function App() {
  const [input, updateInput] = useState("");
  const buttonVals = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0, "-", "+", "/", "=", "*"]
  return (
    <div className="calculator">
      <div className="number-display">{input}</div>
      <div className="buttons">
        {
          buttonVals.map((but) => {
            return <div onClick={() => {updateInput(but)}} className="calc-button">{but}</div>
          })
        }
      </div>
    </div>
  );
}

export default App;
