import React, { useEffect, useState } from 'react';
import { useAppContext } from '../context/appContext';
import { Logo, FormRow, Alert } from '../components';
import WrapperRegister from '../assets/wrappes/RegisterPage';

const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: false
}

export const Register = () => {

  const [values, setValues] = useState(initialState);

  const { isLoading, showAlert } = useAppContext();
  

  const handleChange = (e) => {
    console.log(e.target.value);
  }

  

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e.target)
  }

  const toggleMember = () => {
    setValues({...values, isMember: !values.isMember});
    const x = values;
    console.log(x)
  }

  return (
    <WrapperRegister className='full-page'>
      <form onSubmit={onSubmit} className='form'>
        <Logo/>
        <h5>{values.isMember ? 'Login' : 'Register'}</h5>
        {showAlert && <Alert/> }

        {
        !values.isMember && <FormRow
          type='text'
          name='name'
          value={values.name}
          handleChange = {handleChange}
          labelText='name'
        />
        }
        

        <FormRow
          type='email'
          name='email'
          value={values.email}
          handleChange = {handleChange}
          labelText='email'
        />

        <FormRow
          type='password'
          name='password'
          value={values.password}
          handleChange = {handleChange}
          labelText='password'
        />

       
        <button type='submit'className='btn btn-block' >
          {values.isMember ? 'Sign In' : 'Sign Up'}
        </button>
        
        {
          values.isMember ?
            /*   */
            <p> Don't have account?
              <button type='button' onClick={toggleMember} className='memberBtn'>
                  Register
              </button>
            </p>
            :
            <p> Already have account? 
                <button type='button' onClick={toggleMember} className='memberBtn'>
                  Login
               </button>
            </p>
        }

      </form>
    </WrapperRegister>
  )

}


export default Register;