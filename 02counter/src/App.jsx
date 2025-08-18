// Learned Hooks

import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter] = useState(2)


  // let counter = 5;

  const addValue = () => {
    
    // counter = counter + 1;
    // if(counter >= 20) {
    //   return;
    // }

    // setCounter(counter + 1)

    // INTERVIEW QUESTION OF COUNTER ->

    // setCounter(counter + 1)
    // setCounter(counter + 1)
    // setCounter(counter + 1)
    // setCounter(counter + 1)
    
    // what will be the result here?
    // like will this give me 6 directly or will it be like
    // 3,4,5,6 when clicked the button?
    // ans - it'll give 3,4,5,6 and to make sure to get directly 6 

    // setCounter(counter + 1) - dont do this. setCounter is function so use callback

    setCounter((prevCounter) => prevCounter + 1 )
    setCounter((prevCounter) => prevCounter + 1 )
    setCounter((prevCounter) => prevCounter + 1 )
    setCounter((prevCounter) => prevCounter + 1 )
    // this will directly give you 6 as ans

  }

  const removeValue = () => {
    if(counter <= 0) {
      return;
    }
    setCounter(counter -1)
  }

  return (
    <>
    <h1>Chai aur react</h1>
    <h2>Counter Value: {counter}</h2>
    <button
    onClick={addValue}
    >Add value: {counter}</button>
    <br />
    <button
    onClick={removeValue}
    >Remove value: {counter}</button>
    </>
  )
}

export default App
