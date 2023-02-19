import './App.css';
import Button from './components/Button';
import Display from './components/Display';
import ClearButton from './components/ClearButton';
import { useState, useEffect } from 'react';
import { evaluate } from 'mathjs';

function App() {
  
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  useEffect(() => {
    if (input) {
      setInput(input);
      setResult(result);
    }
  }, [input, result]);

  const addInput = (val) => {
    if(result){
      setInput(result + val);
      setResult('');
    } else {
      setInput(input + val);
    }
    if(input.length > 20){  
      alert("Input is too long");
      setInput('');
    } 
  }

  const calculateResult = () => {
    if (input){      
      setInput(evaluate(input));
      setResult(evaluate(input));
    } else {
      alert("Please enter a valid input");
    }    
    return result;  
  }

  return (
    <div className="App">
      <div className='calculator-container'>
        <Display input={input} />
        <div className='row'>
          <Button handleClick={addInput}>1</Button>
          <Button handleClick={addInput}>2</Button>
          <Button handleClick={addInput}>3</Button>
          <Button handleClick={addInput}>+</Button>
        </div>
        <div className='row'>   
          <Button handleClick={addInput}>4</Button>
          <Button handleClick={addInput}>5</Button>
          <Button handleClick={addInput}>6</Button>
          <Button handleClick={addInput}>-</Button>       
        </div>
        <div className='row'>
          <Button handleClick={addInput}>7</Button>
          <Button handleClick={addInput}>8</Button>
          <Button handleClick={addInput}>9</Button>
          <Button handleClick={addInput}>*</Button>
        </div>
        <div className='row'>
          <Button handleClick={calculateResult}>=</Button>
          <Button handleClick={addInput}>0</Button>
          <Button handleClick={addInput}>.</Button>
          <Button handleClick={addInput}>/</Button>
        </div>
        <div className='row'>
          <ClearButton handleClear={() => setInput('')} />
        </div>
      </div>
    </div>
  );
}

export default App;
