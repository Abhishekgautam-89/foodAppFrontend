import React from 'react'
import CartContext from './cart-context'

const CartProvider = (props) => {

    const addItemToCartHandler = (item)=>{

    }
    const removeItemfromCartHandler = (id)=>{
        
    }

    const cartContext = {
        items:[],
        totalAmount:'',
        addItem: addItemToCartHandler,
        removeItem: removeItemfromCartHandler
    }
  return (
    <CartContext.Provider value={cartContext} >
      {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider
