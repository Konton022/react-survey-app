import React from 'react';
import { useFormik } from 'formik';


const Forms = ({addSurveyData}) => {
    const formik = useFormik({initialValues:{
        order: '',
        timestamp: Date.now(),
        customer : {
        name: '',
        address: ''},
        provider : {name: '',
        once: 0,
        mounthly: 0,
        date: ''}
      },
      onSubmit: (values) => {
        addSurveyData(values)
        formik.resetForm()
    }

    })

    return (
        <form className='min-w-fit border border-indigo-800 rounded mx-12' onSubmit={formik.handleSubmit}>
            
            <fieldset className='flex flex-wrap flex-row border border-indigo-600 rounded m-2 p-2'>
                <legend className='px-1'>Customer data</legend>     
                    <input 
                        type="text"
                        value={formik.values.order} 
                        name='order' 
                        className='border border-indigo-600 rounded m-2 basis-1/6 px-2' 
                        placeholder='order #' 
                        onChange={formik.handleChange}
                    />
                    <input 
                        type="text" 
                        value={formik.values.customer.name} 
                        name='customer.name' 
                        className='border border-indigo-600 rounded m-2 basis-1/6 px-2'
                        placeholder='Customer name'
                        onChange={formik.handleChange}/>
                    <input 
                        type="text" 
                        value={formik.values.customer.address} 
                        name='customer.address' 
                        className='border border-indigo-600 rounded m-2 basis-1/2 px-2' 
                        placeholder='Customer address'
                        onChange={formik.handleChange}/>
                </fieldset>    
            <fieldset className='flex flex-wrap flex-row border border-indigo-600 rounded m-2 p-2'>
                <legend className='px-1'>Provider data</legend> 
                <input 
                    type="text" 
                    value={formik.values.provider.name} 
                    name='provider.name' 
                    className='border border-indigo-600 rounded m-2 basis-1/5 px-2' 
                    placeholder='Provider name' 
                    onChange={formik.handleChange}/> 
                <input 
                    type="number" 
                    value={formik.values.provider.once} 
                    name='provider.once' 
                    className='border border-indigo-600 rounded m-2 basis-1/5 px-2'
                    placeholder='Once'
                    onChange={formik.handleChange}/>
                <input 
                    type="number" 
                    value={formik.values.provider.mounthly} 
                    name='provider.mounthly' 
                    className='border border-indigo-600 rounded m-2 basis-1/5 px-2' 
                    placeholder='Mounthly'
                    onChange={formik.handleChange}/>
                <input 
                    type="date" 
                    value={formik.values.provider.date} 
                    name='provider.date' 
                    className='border border-indigo-600 rounded m-2 basis-1/5 px-2'
                    placeholder='Date'
                    onChange={formik.handleChange}/>
            </fieldset>  
            <button type='submit' className='bg-sky-600 m-2 w-64 rounded text-white'>Submit</button>
           
        </form>

    );
}

export default Forms;
