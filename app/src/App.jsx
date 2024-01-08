import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Class from './Class'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className='App'>

    <Class />
   </div>
  )
}

export default App
