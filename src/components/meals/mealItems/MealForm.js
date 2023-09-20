import React, {useRef, useState} from 'react'
import IInput from '../../UI/IInput'

const MealForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true)
  const amountInputRef = useRef();
  
 
  // const numericalAmount = +amount;

  function submitHandler(e){
    e.preventDefault();
    const amount = amountInputRef.current.value;
    const numericalAmount = +amount
    // console.log(amount)
    if ((amount.trim().length===0)||numericalAmount<1||numericalAmount>5){
      setAmountIsValid(false)
      return
    }
    props.onAddtoCart(numericalAmount)
  }

  return (
    <form className=' text-center' onSubmit={submitHandler} >
        <IInput ref={amountInputRef} label='Quantity :' input={{id:'quantity_'+props.id, type:'number', min:'1', max:'5', defaultValue:'1', step:'1' }} />
      <button className=' bg-red-700 ml-3 rounded-md px-6 py-1 mb-2 font-bold text-white  ' >+ Add</button>
      {!amountIsValid && <p>Please enter valid amount between (1 to 5).</p>}
    </form>
  )
}

export default MealForm
