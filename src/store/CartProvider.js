import React, {useReducer} from 'react'
import CartContext from './cart-context'

let cartDefaultState = {
  items:[],
  totalAmount: 0,
}
 const cartReducer = (state, action)=>{
  switch (action.type){
    case 'ADD':
      {
        // console.log("add ", action.item)
        const updatedItems = state.items.concat(action.item);
        const totalAmount = (state.totalAmount) + action.item.price*action.item.amount
        return cartDefaultState={
          items:updatedItems,
          totalAmount: totalAmount
        }
      }
      default:
      return cartDefaultState
    }
    // return cartDefaultState   
 }


const CartProvider = (props) => {
    const [cartState, cartAction] = useReducer(cartReducer, cartDefaultState)
        

    const addItemToCartHandler = (item)=>{
      // console.log(item)
      cartAction({
        type: 'ADD',
        item: item
      })
      console.log("initial", cartState)
    }
    const removeItemfromCartHandler = (id)=>{
        
    }

    const cartContext = {
        items:cartState.items,
        totalAmount:cartState.totalAmount,
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
