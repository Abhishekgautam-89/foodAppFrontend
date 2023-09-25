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
        const totalAmount = (state.totalAmount) + action.item.price*action.item.amount
        const existingCartItemIndex=state.items.findIndex((item)=>{
          return item.id===action.item.id 
        });
        let existingCartItem = state.items[existingCartItemIndex]
        let updatedItems

        if(existingCartItem){
          const updatedItem = {
            ...existingCartItem,
            amount: existingCartItem.amount+action.item.amount
          }
          updatedItems = [...state.items]
          updatedItems[existingCartItemIndex] = updatedItem
        }
        else{
          updatedItems=state.items.concat(action.item)
        }

        return cartDefaultState={
          items:updatedItems,
          totalAmount: totalAmount
        }
      }
     case 'REMOVE':{

      const removedItemIndex = state.items.findIndex((item)=>{
        return item.id === action.id
      }) ;
      const removedItem = state.items[removedItemIndex];
       let updateAmount = state.totalAmount - removedItem.price;  ;
      let updatedItems
      if (removedItem.amount===1){
        
        updatedItems = state.items.filter(item=>{
          return item.id !==action.id
        })

      }
      else{        
        const updatedItem = {...removedItem, amount: removedItem.amount-1}
        updatedItems = [...state.items];
        updatedItems[removedItemIndex] = updatedItem
      }
      return {
        items: updatedItems,
        totalAmount: updateAmount
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
        cartAction({
          type:"REMOVE",
          id:id
        })
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
