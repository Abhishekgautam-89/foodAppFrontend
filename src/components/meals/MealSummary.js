import React from 'react'
// import './meal.css'

const MealSummary = () => {
  return (
    <section className='animate__animated animate__bounceInDown bg-[#383838] text-white max-w-2xl p-5 w-[90%] m-auto text-center relative -mt-28 rounded-xl  shadow-[0_1px_18px_10px_rgba(0,0,0,0.25)]'>
      <h2 className=' text-4xl pb-2 mb-5 font-semibold' >Delicious Food, Delivered To You</h2>
      <p>
        Choose your favorite meal from our broad selection of available meals
        and enjoy a delicious lunch or dinner at home.
      </p>
      <p>
        All our meals are cooked with high-quality ingredients, just-in-time and
        of course by experienced chefs!
      </p>
    </section>
  )
}

export default MealSummary
