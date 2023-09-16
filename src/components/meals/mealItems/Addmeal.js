import React from 'react'
import MealForm from './MealForm'

const Addmeal = (props) => {
  // console.log(mealList)
  // toFixed is used to get number after decimal upto 2 digits.
  const price = `$${props.price.toFixed(2)}`
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
        <MealForm id={props.id} />
      </div>
    </li>
  )
}

export default Addmeal
