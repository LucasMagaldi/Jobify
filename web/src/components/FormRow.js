import React from 'react'

export const FormRow = ({type, name, value, handleChange, labelText}) => {
  return (
    <div className='form-row'>
        <label htmlFor={name} className='form-label'>{labelText}</label>
        <input 
        className='form-input'
        type={type}
        value={value} 
        name={name} 
        onChange={handleChange}
        />
    </div>
  )
}

export default FormRow;