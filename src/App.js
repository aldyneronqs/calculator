import './App.css';
import { useState } from "react";

function Display({ display }) {
  return (
    <div className="Display">
      {display}
    </div>
  );
}

function Key({ label, clickHandler, className = "" }) {
  return (
    <button className={`ButtonKeys ${className}`} onClick={clickHandler}>
      {label}
    </button>
  );
}

function App() {
  const [disp, setDisp] = useState(0);
  const [num1, setNum1] = useState(null);
  const [num2, setNum2] = useState(null);
  const [op, setOp] = useState(null);

  const genericClickHandler = (e) => {
    e.preventDefault();
    setDisp('Coming Soon');
  };

  const clrClickHandler = (e) => {
    e.preventDefault();
    setDisp(0);
    setNum1(null);
    setNum2(null);
    setOp(null);
  };

  const numClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;
    if (op === null) {
      if (num1 === null) {
        setNum1(value);
        setDisp(value);
      } else {
        setNum1(num1 + value);
        setDisp(num1 + value);
      }
    } else {
      if (num2 === null) {
        setNum2(value);
        setDisp(value);
      } else {
        setNum2(num2 + value);
        setDisp(num2 + value);
      }
    }
  };

  const opClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;
    setOp(value);
    setDisp(value);
  };

  const eqClickHandler = (e) => {
    e.preventDefault();
    let result;
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);
    switch (op) {
      case '+':
        result = n1 + n2;
        break;
      case '-':
        result = n1 - n2;
        break;
      case '*':
        result = n1 * n2;
        break;
      case '÷':
        result = n1 / n2;
        break;
      default:
        return;
    }
    
    setDisp(result);
    setNum1(null);
    setNum2(null);
    setOp(null);
  };

  // Surname button click handler
  const surnameClickHandler = (e) => {
    e.preventDefault();
    setDisp('Aldyne Ronquillo');
  };

  return (
    <div className="App">
      <h1>Calculator of Aldyne Ronquillo - IT3A</h1>

      <div className="CalcContainer">
        <div className="DispContainer">
          <Display display={disp} />
        </div>

        <div className="ButtonsContainer">
          <Key label={7} clickHandler={numClickHandler} />
          <Key label={8} clickHandler={numClickHandler} />
          <Key label={9} clickHandler={numClickHandler} />
          <Key label={'÷'} clickHandler={opClickHandler} className="OperatorButton" />
          <Key label={4} clickHandler={numClickHandler} />
          <Key label={5} clickHandler={numClickHandler} />
          <Key label={6} clickHandler={numClickHandler} />
          <Key label={'*'} clickHandler={opClickHandler} className="OperatorButton" />
          <Key label={1} clickHandler={numClickHandler} />
          <Key label={2} clickHandler={numClickHandler} />
          <Key label={3} clickHandler={numClickHandler} />
          <Key label={'-'} clickHandler={opClickHandler} className="OperatorButton" />
          <Key label={'C'} clickHandler={clrClickHandler} className="ClearButton" />
          <Key label={0} clickHandler={numClickHandler} />
          <Key label={'='} clickHandler={eqClickHandler} className="EqualsButton" />
          <Key label={'+'} clickHandler={opClickHandler} className="OperatorButton" />
        </div>

        {/* Button with Surname */}
        <div className="SurnameContainer">
          <Key label={'RONQUILLO'} clickHandler={surnameClickHandler} className="OperatorButton" />
        </div>
      </div>
    </div>
  );
}

export default App;
