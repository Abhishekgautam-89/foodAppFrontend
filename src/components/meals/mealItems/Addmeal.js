import React , {useContext} from 'react'
import MealForm from './MealForm'
import CartContext from '../../../store/cart-context'

const Addmeal = (props) => {
  // console.log(mealList)
  // toFixed is used to get number after decimal upto 2 digits.
  const cartCTX = useContext(CartContext)
  const price = `$${props.price.toFixed(2)}`

  function addCartHandler(amount){
    
    cartCTX.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price 
    })
    // console.log(cartCTX)
  }

  return (
    <li className='flex p-2 border-b-2 justify-between items-center' >
      <div>
        <h3 className=' font-semibold text-gray-500  text-2xl'>{props.name}</h3>
        <div className=' italic text-gray-500  ' >
          {props.description}
        </div>
        <div className=' font-bold text-xl text-orange-600' >
          {price}
        </div>
      </div>
      <div>
        <MealForm id={props.id} onAddtoCart={addCartHandler} />
      </div>
    </li>
  )
}

export default Addmeal
