import React, { useState } from 'react';
import './App.css';
import Headers from './components/layout/headers'
import Meals from './components/meals/Meals';
import Cart from './components/cart/Cart';
import CartProvider from './store/CartProvider';

function App() {
  const [closeCart, setCloseCart] = useState(false)

  const openCartHandler = ()=>{
    setCloseCart(true)
  }

  const closeCartHandler = ()=>{
    setCloseCart(false)
  }

  return (
    <CartProvider>
      {closeCart && <Cart onHideCart={closeCartHandler}/>} 
      <Headers onShowCart={openCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>

  );
}

export default App;
