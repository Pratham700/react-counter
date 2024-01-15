import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //const [count, setCount] = useState(0)
    let [counter, setCounter] = useState(7,)
    //let counter = 7
    const addValue = () => {
        console.log("Value Added", counter);
        setCounter(++counter);
    }

    const removeValue = () => {
        console.log("Value Removed", counter);
        if(counter>0) {
            setCounter(--counter);
        }
    }

  return (
    <>
      <h1>React Counter</h1>

        <button
            onClick={addValue}>
            Click to Add Value
            <br/>
        </button>
        <h2> Counter Value = {counter}</h2>

        <button
            onClick={removeValue}>
            Click to Remove Value
            <br/>
        </button>


    </>
  )
}

export default App
