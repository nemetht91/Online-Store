import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/navigation/navbar'
import { register } from 'swiper/element/bundle';
import Footer from './components/footer/footer'
import CartProvider from './CartContext'
import ShoppingCartViewer from './components/shoppingCart/shoppingCartViewer'
import { Routes, Route } from 'react-router-dom'
import Home from './components/routes/Home'
import Products from './components/routes/Products'
import ErrorPage from './components/routes/ErrorPage';
import NotFound from './components/routes/NotFound';
import ProductInfo from './components/routes/ProductInfo';
import { ProductProvider } from './ProductsContext';
import ShoppingCartSummary from './components/shoppingCart/shoppingcartSummary';

register();

function App() {
  const [count, setCount] = useState(0)
 

  return (
    <div className="app">
      <CartProvider>
        <Navbar/>
        <ProductProvider>
          <Routes>
              <Route path="/" element={<Home/>} />
              <Route path='/products'>
                <Route path=':category'>
                    <Route index element={<Products />}/>
                    <Route path=':productName' element={<ProductInfo />}/>
                </Route>
              </Route>
              <Route path='/cart' element={<ShoppingCartSummary/>}/>
              <Route path='/pagenotfound' element={<NotFound />}/>
          </Routes>
        </ProductProvider>
        <ShoppingCartViewer  />
        <Footer />
      </CartProvider>
    </div>
        
  )
}

export default App
