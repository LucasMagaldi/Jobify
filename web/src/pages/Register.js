import React, { useEffect, useState } from 'react';
import { Logo, FormRow } from '../components';
import WrapperRegister from '../assets/wrappes/RegisterPage';

const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: false
}

export const Register = () => {

  const [values, setValues] = useState(initialState);

  const handleChange = (e) => {
    console.log(e.target);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e.target)
  }

  return (
    <WrapperRegister className='full-page'>
      <form onSubmit={onSubmit} className='form'>
        <Logo/>
        <h3>{values.isMember ? 'Login' : 'Register'}</h3>

       
        <button type='submit'className='btn btn-block' >
          Sign In
        </button>
      </form>
    </WrapperRegister>
  )

}


export default Register;