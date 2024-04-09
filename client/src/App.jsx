import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Customers from './components/customers'
import Navbar from './components/navigation/navbar'
import MainContent from './components/body/Maincontent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Navbar/>
        <MainContent/>
      </div>
      
    </>
  )
}

export default App
