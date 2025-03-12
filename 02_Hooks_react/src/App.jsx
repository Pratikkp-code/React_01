import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(10);
  
  const addValue = () => {
    if(counter>=20){
      counter=20;
    }
    else{
      setCounter(counter+1);
    }
    
  }
  const removeValue = () => {
    if(counter<=0){
      counter = 0;
    }
    else{
      setCounter(counter-1);
    }
    
  }

  return (
    <>
      <h2>Hooks ... </h2>
      <br />
      <button onClick={addValue}>Add Value {counter}</button>
      <br />
      <br />
      <button onClick={removeValue}>Remove Value {counter}</button>
    </>
  )
}

export default App
