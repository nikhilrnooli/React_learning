import React from 'react'
import { useState } from 'react'

import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount]= useState(0)

  let myObj = {
    username: "nikhil",
    age: 23
  }
  let newArr = [1,2,3,4]


  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-4xl mb-4'>Tailwind Test</h1>
    <Card  username= "Chairaurcode" />
    <Card username = "Nikhil"/>
    </>
  )
}

export default App
