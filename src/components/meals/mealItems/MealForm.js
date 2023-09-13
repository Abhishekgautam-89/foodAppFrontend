import React from 'react'
import Input from '../../UI/IInput'

const MealForm = (props) => {
  return (
    <form className=' text-center' >
        <Input label='Quantity :' input={{id:'quantity_'+props.id, type:'number', min:'1', max:'5', defaultValue:'1', step:'1' }} />
      <button className=' bg-red-700 ml-3 rounded-md px-6 py-1 mb-2 font-bold text-white  ' >+ Add</button>
    </form>
  )
}

export default MealForm
