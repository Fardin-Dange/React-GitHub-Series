import React, { useCallback, useMemo } from 'react'
import './App.css'
import Button from './components/Button';


const App = () => {
  let [number , setNumber] = React.useState(0);
  let [count , setCount] = React.useState(0);

  function heavyCalculation(number) {
    console.log('heavy calculation chala');
  let sum = 0;
  for(let i = 1; i <= number; i++) {
    sum += i;
  }
  return sum;
}

const incrementNumber = useCallback(() => {
  setNumber(prev => prev + 1);
},[]);

const incrementCount = useCallback(() => {
  setCount(prev => prev + 1);
},[]);

const result = useMemo(() => {
  return heavyCalculation(number);
}, [number]);

  return (
    <div>
      <h1>usememo1</h1>
      <p>problem yeh hai ki jab state update ho jata hai to component re-renders ho jata hai aur jab component re-renders to jo heavy calculation hai wo hi re-renders ho jata hai which is not good for performance</p>

      <p>number : {number}</p>
      <p>count : {count}</p>
      <div id='btn'>
        {/* <button onClick={incrementnumber}>increment number</button>
        <button id='btn1' onClick={incrementcount}>increment count</button> */}
        <Button handleClick={incrementNumber} label="Increment Number"/>
      <Button handleClick={incrementCount} label="Increment Count"/>

      </div >

      <p>result : {result}</p>  
      
    </div>
  )
}

export default App
