import { useState } from 'react';

export const handleClick = (currentResult, value) => currentResult + value;
export const clear = () => "";
export const backspace = (currentResult) => currentResult.slice(0, -1);
export const calculate = (currentResult) => {
  try {
    return eval(currentResult).toString();
  } catch (err) {
    return "Error";
  }
};

const Calculator = () => {
  const [result, setResult] = useState("");

  const buttonData = [
    { value: "Clear", onClick: () => setResult(clear()), id: "clear", dataTestId: "clear" },
    { value: "C", onClick: () => setResult(backspace(result)), id: "backspace", dataTestId: "backspace" },
    { value: "/", onClick: () => setResult(handleClick(result, '/')), dataTestId: "divide" },
    { value: "7", onClick: () => setResult(handleClick(result, '7')), dataTestId: "num-7" },
    { value: "8", onClick: () => setResult(handleClick(result, '8')), dataTestId: "num-8" },
    { value: "9", onClick: () => setResult(handleClick(result, '9')), dataTestId: "num-9" },
    { value: "*", onClick: () => setResult(handleClick(result, '*')), dataTestId: "multiply" },
    { value: "4", onClick: () => setResult(handleClick(result, '4')), dataTestId: "num-4" },
    { value: "5", onClick: () => setResult(handleClick(result, '5')), dataTestId: "num-5" },
    { value: "6", onClick: () => setResult(handleClick(result, '6')), dataTestId: "num-6" },
    { value: "-", onClick: () => setResult(handleClick(result, '-')), dataTestId: "subtract" },
    { value: "1", onClick: () => setResult(handleClick(result, '1')), dataTestId: "num-1" },
    { value: "2", onClick: () => setResult(handleClick(result, '2')), dataTestId: "num-2" },
    { value: "3", onClick: () => setResult(handleClick(result, '3')), dataTestId: "num-3" },
    { value: "+", onClick: () => setResult(handleClick(result, '+')), dataTestId: "add" },
    { value: "0", onClick: () => setResult(handleClick(result, '0')), dataTestId: "num-0" },
    { value: ".", onClick: () => setResult(handleClick(result, '.')), dataTestId: "dot" },
    { value: "=", onClick: () => setResult(calculate(result)), id: "result", dataTestId: "equals" },
  ];

  return (
      <div className="calculator">
        <form>
          <input type="text" value={result} readOnly />
        </form>

        <div className="keypad">
          {buttonData.map(button => (
              <button
                  key={button.value}
                  onClick={button.onClick}
                  id={button.id}
                  data-testid={button.dataTestId} // Use dataTestId from the object
              >
                {button.value}
              </button>
          ))}
        </div>
      </div>
  );
};

export default Calculator;