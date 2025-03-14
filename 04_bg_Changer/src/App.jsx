import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color,setColor] = useState('white') 
  return (
    <div className='w-full h-screen duration-150 '
    style={{backgroundColor:color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 
      inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center
        gap-3 shadow-lg bg-white px-3 py-2 rounded-xl '>
          <button className=' px-4 py-2 rounded-lg text-white pointer-events-auto '
          style={{backgroundColor: "green",hover:"bg-gray-800"}}
          onClick={()=>{setColor("green")}}
          >Green</button>
        <button className='outline-none px-4 py-2 rounded-lg text-white'
          style={{backgroundColor: "red"}}
          onClick={()=>{setColor("red")}}
          >Red</button>
        <button className='outline-none px-4 py-2 rounded-lg text-white'
          style={{backgroundColor: "blue"}}
          onClick={()=>{setColor("blue")}}
          >Blue</button>
        <button className='outline-none px-4 py-2 rounded-lg text-white'
        style={{backgroundColor: "olive"}}
        onClick={()=>{setColor("olive")}}
        >Olive</button>
      <button className='outline-none px-4 py-2 rounded-lg text-white'
          style={{backgroundColor: "black"}}
          onClick={()=>{setColor("black")}}
          >Black</button>
        </div>
      </div>
    </div>
    
  )
}
export default App
