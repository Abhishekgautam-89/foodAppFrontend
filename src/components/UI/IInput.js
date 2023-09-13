import React from 'react'

const Input = (props) => {
    return (
        <div className='flex justify-center items-center '>
            <label className=' p-4 font-extrabold text-gray-950' htmlFor={props.input.id} >
                {props.label} 
            </label>
            <input className=' border-gray-200 border-2	border-solid w-12 pl-3 h-8 rounded-lg ' {...props.input}>
            </input>

        </div>
    )
}

export default Input

