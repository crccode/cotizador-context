import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import AppSeguro from './components/AppSeguro'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <AppSeguro/>
    </div>
  )
}

export default App
