import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("0");
  const [isResult, setIsResult] = useState(false); // new state

  const handleClick = (value) => {
    if (isResult && !isNaN(value)) {
      // if last shown was result and new input is a number → start fresh
      setInput(value);
      setIsResult(false);
    } else if (input === "0" && value !== "." && !isNaN(value)) {
      setInput(value);
    } else {
      setInput(input + value);
      setIsResult(false);
    }
  };

  const handleClear = () => {
    setInput("0");
    setIsResult(false);
  };

  const handleBackspace = () => {
    if (isResult) {
      // if result displayed and user presses backspace → reset
      setInput("0");
      setIsResult(false);
    } else if (input.length > 1) {
      setInput(input.slice(0, -1));
    } else {
      setInput("0");
    }
  };

  const handleCalculate = () => {
    try {
      const result = eval(input).toString(); // ⚠️ eval for demo only
      setInput(result);
      setIsResult(true); // mark that we showed result
    } catch {
      setInput("Error");
      setIsResult(true);
    }
  };

  return (
    <div className="app">
      <div className="calculator">
        <div className="display">{input}</div>
        <div className="buttons">
          <button onClick={handleClear}>C</button>
          <button onClick={handleBackspace}>⌫</button>
          <button onClick={() => handleClick("%")}>%</button>
          <button className="operator" onClick={() => handleClick("/")}>
            /
          </button>
          <button onClick={() => handleClick("7")}>7</button>
          <button onClick={() => handleClick("8")}>8</button>
          <button onClick={() => handleClick("9")}>9</button>
          <button className="operator" onClick={() => handleClick("*")}>
            ×
          </button>
          <button onClick={() => handleClick("4")}>4</button>
          <button onClick={() => handleClick("5")}>5</button>
          <button onClick={() => handleClick("6")}>6</button>
          <button className="operator" onClick={() => handleClick("-")}>
            -
          </button>
          <button onClick={() => handleClick("1")}>1</button>
          <button onClick={() => handleClick("2")}>2</button>
          <button onClick={() => handleClick("3")}>3</button>
          <button className="operator" onClick={() => handleClick("+")}>
            +
          </button>
          <button onClick={() => handleClick("0")}>0</button>
          <button onClick={() => handleClick(".")}>.</button>
          <button className="equal" onClick={handleCalculate}>
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
