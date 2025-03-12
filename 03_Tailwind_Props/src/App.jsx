import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './components/Cards'

function App() {
  
  return (
    <>
      <h1 className='bg-green-400 text-black rounded-xl p-2 mb-5' >Tailwind</h1>
     <Cards username="Pratik Kapure" Age="20"/> 
     <Cards username="Sid" Age="28"/>
    </>
  )
}

export default App
