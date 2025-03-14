import { useState ,useCallback, useEffect, useRef} from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const[numberAllowed, setNumberAllowed] = useState(false);
  const[CharAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('');

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback( () => {
    let pass = "";
    let str =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      if(numberAllowed){
        str += "0123456789";
      }
      if(CharAllowed){
        str += "!@#$%^&*-[]()~`_+";
      }

      for(let i=1;i<length;i++){
        let char = Math.floor(Math.random()*str.length+1)
         pass += str.charAt(char);
      }
      setPassword(pass);
  },[length,numberAllowed,CharAllowed,setPassword]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,100);
    window.navigator.clipboard.writeText(passwordRef.current.value);
    alert('Password copied to clipboard');
  },[password]);

  useEffect(() => {
    passwordGenerator();
  }
  ,[length,numberAllowed,CharAllowed,passwordGenerator]);

  return (
      <div className='w-full max-w-md mx-auto shadow-md 
      px-4 rounded-lg py-10 text-blue-700 bg-gray-700 justify-center
      align-middle m-20'>
      <h1 className='text-4xl text-center
       text-white'>
        Password Generator</h1>
        <div className='flex shadow rounded-lg
         overflow-hidden m-3'>
          <input type="text"
          value={password}
          readOnly
          ref={passwordRef}
          className='w-full px-4 py-3 outline-none 
          text-center p-2'
          placeholder='Password'
          />
          <button className=' px-3 py-3 outline-none bg-blue-500
          text-white '
          onClick={copyPasswordToClipboard}>
            copy
          </button>
          </div>
          <div className='flex text-sm gap-x-2 my-2'>
            <div className='flex items-center gap-x-1 m-2'>
              <input type="range"
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => setLength(e.target.value)}
              />
              <label className='text-orange-500'>Length: {length}</label>
            </div>
            <div className='flex items-center gap-x-1 m-2'>
              <input type="checkbox"
              defaultChecked={numberAllowed}
              id='numberInput'
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
              />
              <label htmlFor="numberInput" className='text-orange-500'>Numbers</label>
            </div>
            <div className='flex items-center gap-x-1'>
              <input type="checkbox"
              defaultChecked={CharAllowed}
              id='numberInput'
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
              />
              <label htmlFor="numberInput"className='text-orange-500'>Characters</label>
            </div>
          </div>
      </div>
  )
}

export default App
