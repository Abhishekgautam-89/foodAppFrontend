import React, {Fragment} from 'react'
import image from '../../assets/foodapp.jpg'
import  "./header.css";

const headers = () => {
  return (
    <>
      <header className='h-[65px] fixed w-[100%] bg-red-800 flex items-center z-10 '>       
      <h1 className='text-3xl px-8 md:px-16 font-bold text-white italic'> 
        Food App
      </h1>
      </header>
      <div>
        <img className=' images  z-0' src={image} alt="headerImage" srcSet='' />
      </div>
    </>
  )
}

export default headers
