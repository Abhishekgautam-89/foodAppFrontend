import React from 'react'
import CartIcon from '../cart/CartIcon'


const HeaderButton = () => {
  return (
    <>
    <button className='flex font-bold font-[inherit] px-6 py-2 justify-around bg-[#4d1601] rounded-3xl items-center text-white'  >
      <span className='w-7 h-7 mr-3' > 
        <CartIcon/>
      </span>
      <span>
        Your Cart
      </span>
      <span className=' ml-2 px-6 py-1 bg-[#b94517] rounded-3xl font-bold  ' >
        3
      </span>
    </button>
    </>
  )
}

export default HeaderButton
