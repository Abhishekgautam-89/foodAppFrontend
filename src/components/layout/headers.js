import React, {Fragment} from 'react'
import image from '../../assets/foodapp.jpg'
import  "./header.css";
import HeaderButton from './HeaderButton';

const headers = () => {
  return (
    <Fragment>
       <header className='h-[65px] fixed w-[100%] bg-red-800 flex items-center justify-between px-24 z-10 '>       
      <h1 className='text-3xl font-bold text-white italic'> 
        Food App
      </h1>
      <HeaderButton/>

      {/* <button className='bg-white px-2 ' >Cart</button> */}
      </header> 
      <div>
        <img className=' images  ' src={image} alt="headerImage" srcSet='' />
      </div>
    </Fragment>
  )
}

export default headers
