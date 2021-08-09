import React from 'react';
import useSigninForm from './useSigninForm';
import validate from '../Signup/validateInfo';



const FormSignin = ({submitForm}) => {
    const {handleChange, values, handleSubmit, errors  } = useSigninForm(submitForm, validate);
    return (
        // <div className='form-content'>
            <form className='form' onSubmit={handleSubmit}>
                <h1>
                    
                    Log in to your account
                </h1>
                
                <div className='form-inputs'>
                    <label htmlFor="email1" className='form-label'>Email</label>
                        <input 
                        id='email1'
                        type='text' 
                        name='email1'
                        className='form-input'
                        placeholder='Enter your email'
                        value={values.email1}
                        onChange={handleChange}
                         />
                         {errors.email1 && <p>{errors.email1}</p>}
                    
                </div>
                <div className='form-inputs'>
                    <label htmlFor="password1" className='form-label'> Password</label>
                        <input 
                        id='password1'
                        type='password' 
                        name='password1'
                        className='form-input'
                        placeholder='Enter your password'
                        value={values.password1}
                        onChange={handleChange}
                        />
                        {errors.password1 && <p>{errors.password1}</p>}
                    
                </div>     
                     
                <button className='form-input-btn'
                type='submit'>
                    Sign in
                </button>
                <span className='form-input-login' >
                    Create an account <a 
                    href='./Form'>here</a>
                </span>

            </form>
        // </div>
    )
}

export default FormSignin;
