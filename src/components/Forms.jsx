import React from 'react';
import { Formik, Field, Form, useFormik } from 'formik';

const Forms = () => {
    const formik = useFormik({initialValues:{
        customer : {order: '',
        name: '',
        address: ''},
        provider : {name: '',
        once: 0,
        mounthly: 0,
        date: ''}
      },
      onSubmit: (values) => {
        console.log(values);
    }
        
    })

    
    return (
        <form className='border border-indigo-600 rounded mx-12' onSubmit={formik.handleSubmit}>
            
            <fieldset className='flex flex-wrap flex-row border border-indigo-600 rounded m-2 p-3'>
                <legend className='px-1'>Customer data</legend> 
                <input 
                    type="text"
                    value={formik.values.customer.order} 
                    name='order' 
                    className='border border-indigo-600 rounded m-2 basis-1/6 px-2 ' 
                    placeholder='order #' 
                    onChange={formik.handleChange}/>
                     
                <input 
                    type="text" 
                    value={formik.values.customer.name} 
                    name='name' 
                    className='border border-indigo-600 rounded m-2 basis-1/6 px-2'
                    placeholder='Customer name'
                    onChange={formik.handleChange}/>
                <input 
                    type="text" 
                    value={formik.values.customer.address} 
                    name='address' 
                    className='border border-indigo-600 rounded m-2 basis-1/2 px-2' 
                    placeholder='Customer address'
                    onChange={formik.handleChange}/>
            </fieldset>    
            <fieldset className='flex flex-wrap flex-row border border-indigo-600 rounded m-2 p-3'>
                <legend className='px-1'>Provider data</legend> 
                <input 
                    type="text" 
                    value={formik.values.provider.name} 
                    name='name' 
                    className='border border-indigo-600 rounded m-2 basis-1/5 px-2' 
                    placeholder='Provider name' 
                    onChange={formik.handleChange}/> 
                <input 
                    type="number" 
                    value={formik.values.provider.once} 
                    name='once' 
                    className='border border-indigo-600 rounded m-2 basis-1/5 px-2'
                    placeholder='Once'
                    onChange={formik.handleChange}/>
                <input 
                    type="number" 
                    value={formik.values.provider.mounthly} 
                    name='mounthly' 
                    className='border border-indigo-600 rounded m-2 basis-1/5 px-2' 
                    placeholder='Mounthly'
                    onChange={formik.handleChange}/>
                <input 
                    type="date" 
                    value={formik.values.provider.date} 
                    name='date' 
                    className='border border-indigo-600 rounded m-2 basis-1/5 px-2'
                    placeholder='Date'
                    onChange={formik.handleChange}/>
            </fieldset>  
            <button type='submit' className='bg-sky-600 m-2 w-64 rounded text-white'>Submit</button>
           
        </form>
        
    );
}

export default Forms;
