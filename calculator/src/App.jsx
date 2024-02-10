import { useState } from 'react'
import './App.css'

function App() {
  const [cal, setCal] = useState("");
  const [result, setResult] = useState("");

  const operands = ["/", "*", "-", "+"];

  const getDigits = () => {
    let numbers = []
    for(let i = 1; i < 10; i++) {
      numbers.push(<button onClick={() => {addDigits(i)}}>
        {i.toString()}
      </button>) 
    }
    return numbers;
  }

  const addDigits = (value) => {
    let newCal = cal + value;
    setCal(newCal);
    setResult(eval(newCal).toString());
  }
  const addOperand = (value) => {
    if(cal === "" || operands.includes(cal.charAt[cal.length - 1]) || cal.charAt[cal.length - 1] === '.') {
      return;
    }
    setCal(prev => prev + value);
  }
  const calculate = () => {
    setCal(eval(cal).toString());
  }
  return (
    <>
      <div className="calculator_wrapper">
        <div className="output">
          <span className="operand">{cal || 0}</span>
          <span className="result">{result || 0}</span>
        </div>
        <div className="keyboard">
          <div className="oprators_wrapper">
            {operands?.map((ele, i) => {
              return (
                <button key={i} onClick={() => addOperand(ele)}>{ele}</button>
              )
            })}
          </div>
          <div className="digits_wrapper">
            {getDigits()}
            <button onClick={() => { addDigits(0) }}>0</button>
            <button onClick={() => addOperand('.')}>.</button>
            <button onClick={() => calculate()}>=</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
