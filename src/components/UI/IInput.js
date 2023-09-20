
import React from 'react'

const IInput = React.forwardRef((props, ref) => {
    return (
        <div className='flex justify-center items-center '>
            <label className='p-4 font-extrabold text-gray-950' htmlFor={props.input.id} >
                {props.label} 
            </label>
            <input ref={ref} {...props.input} className=' border-gray-200 border-2	border-solid w-12 pl-3 h-8 rounded-lg' />            
        </div>
    )
})

export default IInput

