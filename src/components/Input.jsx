import React from 'react';

const Input = ({type, name, placeholder}) => {
    return <>
      <input type={type} name={name} placeholder={placeholder} className='m-3 border-2 rounded-md focus:border-blue-300' />
    </>
}



export default Input;
