import React, {useState, useReducer} from 'react'
import logo from './logo.svg';
import './App.css';
import counterReducer from './reducers/counterReducer'


function App() {
  const [counter, dispatch] = useReducer( counterReducer, 20 )  
  //useReducer takes in 2 parameters, the reducers, and the initial value

  const [inputValue, setInputValue] = useState(0)

  const mathArr = ['Add', 'Subtract', 'Multiply', 'Divide', 'Power', 'Remainder', 'Square Root']

  return (
    <div className="App App-header">
      <h1>Counter: {counter}</h1>
      <input 
        type='number' 
        onChange={(e) => setInputValue(parseInt(e.target.value))}
      />
      <button onClick={
        // () => dispatch({}) // the object is "action" in the reducer function
        () => dispatch({
          type: 'RESET',
          // data: "Data!!!"
        })
      }>Reset</button>
      <button onClick={
        () => dispatch({
          type: 42
        })}>The Ultimate Answer</button>
      <button onClick={
        () => dispatch({
          type: 'increment'
        })
      }>++Increment++</button>
      <button onClick={
        () => dispatch({
          type: 'decrement'
        })
      }>--Decrement--</button>
{/* 
      <button onClick={
        () => dispatch({
          type: 'add',
          value: inputValue
        })
      }>+Add+</button>

    <button onClick={
        () => dispatch({
          type: 'subtract',
          value: inputValue
        })
      }>-Subtract-</button> */}
      {
        mathArr.map((element) => {
          return (
            <button
              onClick={
                ()=> dispatch({
                  type: element,
                  value: inputValue
                })
              }
            >{element} {' '} {inputValue}
            </button>
          )
          
        })
      }

    </div>
  );
}

export default App;