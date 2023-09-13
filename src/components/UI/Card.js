import React from 'react'

const Card = (props) => {
  return (
    <div className=' p-2 w-[90%] mx-auto bg-white  rounded-lg text-black shadow-2xl ' >
      {props.children}
    </div>
  )
}

export default Card
