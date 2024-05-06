import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-black uppercase text-white'>Hello world</h1>
      <button onClick={()=>{setCount(count+1)}}>{count}</button>
    </>
  )
}

export default App
