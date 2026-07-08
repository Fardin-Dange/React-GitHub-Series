import React from 'react'

import {useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './features/counterSlice';
import { changeMode } from './features/ModeSclice';



const App = () => {
  const count = useSelector((state) => state.counter.value);
  const mode = useSelector((state) => state.mode.vMode)
  const dispatch = useDispatch()
  return (
    <div>
      <h1>Learning Redux </h1>
      <div>
        <h3>Counter : {count}</h3>
        <h3>Mode : {mode}</h3>

        <button onClick={() => {dispatch(increment())}}>inc</button>
        <button onClick={() => {dispatch(decrement())}}>dec</button>
        <button onClick={() => {dispatch(changeMode())}}>Change Mode</button>
      </div>
    </div>
  )
}

export default App
