import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Customers from './components/customers'
import Navbar from './components/navigation/navbar'
import MainContent from './components/body/Maincontent'
import { register } from 'swiper/element/bundle';
import Footer from './components/footer/footer'
import CartProvider from './CartContext'

register();

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
      <CartProvider>
        <Navbar/>
        <MainContent/>
        <Footer />
      </CartProvider>
    </div>
        
  )
}

export default App
