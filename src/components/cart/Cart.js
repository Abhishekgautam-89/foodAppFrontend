import React, {useContext} from 'react'
import classes from './cart.module.css'
import Modal from '../UI/Modal'
import cartContext from '../../store/cart-context'
import CartItems from './CartItems'

// const items = [{ id: 'c1', name: 'Sushi', amount: 2, price: 12.99 }, { id: 'c2', name: 'Sushi-1', amount: 3, price: 14.99 }]

const Cart = (props) => {
  // console.log('cart>', props)
  const CartCTX = useContext(cartContext)
  console.log("cart> ",CartCTX.items)
  const items = CartCTX.items
  const totalAmount = `$${CartCTX.totalAmount.toFixed(2)}`;
  const checkItems = items.length>0
  const cartItems = <ul className={classes['cart-items']} >
    {items.map((item) => {
      return <CartItems key={item.id} name={item.name} amount={item.amount} price={item.price} />
    })}
  </ul>
  return (
    <Modal onHideCart={props.onHideCart} >
      {cartItems}
      <div className={classes.total} >
        <span>
          Total Amount:
        </span>
        <span>
          {totalAmount}
        </span>
      </div>
      <div className={classes.actions} >
        <button onClick={props.onHideCart} > Close</button>
        {checkItems && <button> Order</button>}
      </div>
    </Modal>
  )
}

export default Cart
