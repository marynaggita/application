import React from 'react';
import useForm  from './useForm';
import validate from './validateInfo';
import './Form.css'

const FormSignup = ({submitForm}) => {
    const {handleChange, values, handleSubmit, errors  } = useForm(submitForm, validate);


    return (
        // <div className='form-content'>
            <form className='form' onSubmit={handleSubmit}>
                <h1>
                    Get started with us today. Create your account by filling the information below
                </h1>
                <div className='form-inputs'>
                    <label htmlFor="First Name" className='form-label'>First Name </label>
                        <input 
                        id='firstname'
                        type='text' 
                        name='firstname'
                        className='form-input'
                        placeholder='Enter your first Name'
                        value={values.firstname}
                        onChange={handleChange}
                        /> 
                        {errors.firstname && <p>{errors.firstname}</p>}
                        
                    
                </div>
                <div className='form-inputs'>
                    <label htmlFor="lastname" className='form-label'> Last Name</label>
                        <input 
                        id='lastname'
                        type='text' 
                        name='lastname'
                        className='form-input'
                        placeholder='Enter your Last Name'
                        value={values.lastname}
                        onChange={handleChange}
                         />
                         {errors.lastname && <p>{errors.lastname}</p>}
                    
                </div>
        
                <div className='form-inputs'>
                    <label htmlFor="email" className='form-label'>Email</label>
                        <input 
                        id='email'
                        type='text' 
                        name='email'
                        className='form-input'
                        placeholder='Enter your email'
                        value={values.email}
                        onChange={handleChange}
                         />
                         {errors.email && <p>{errors.email}</p>}
                    
                </div>
                <div className='form-inputs'>
                    <label htmlFor="password" className='form-label'> Password</label>
                        <input 
                        id='password'
                        type='password' 
                        name='password'
                        className='form-input'
                        placeholder='Enter your password'
                        value={values.password}
                        onChange={handleChange}
                        />
                        {errors.password && <p>{errors.password}</p>}
                    
                </div>
                <div className='form-inputs'>
                    <label htmlFor="password2" className='form-label'>Re-enter your password</label>
                        <input 
                        id='password2'
                        type='password' 
                        name='password2'
                        className='form-input'
                        placeholder='Confirm  password'
                        value={values.password2}
                        onChange={handleChange}
                         />
                         {errors.password2 && <p>{errors.password2}</p>}
                    
                </div>
                <div className='form-inputs'>
                    <label htmlFor="phone" className='form-label'>Phone Number</label>
                        <input 
                        id='phone'
                        type='tel' 
                        name='phone'
                        className='form-input'
                        placeholder='Enter your Phone Number'
                        value={values.phone}
                        onChange={handleChange}
                        />
                        {errors.phone && <p>{errors.phone}</p>}
                    
                </div>
                <div className='form-inputs'>
                    <label htmlFor="date" className='form-label'>Date of birth</label>
                        <input 
                        id='date'
                        type='date' 
                        name='date'
                        className='form-input'
                        placeholder='Enter your date of birth'
                        value={values.date}
                        onChange={handleChange}
                        />
                        {errors.date && <p>{errors.date}</p>}
                </div>
                
                <div className="radio-buttons">
                    <label htmlFor='gender' className='form-label'>Gender</label>
                   <div className='form-input'>  
                   
                    Male
                <input
                
                    id="male"
                    value="male"
                    name="gender"
                    type="radio"
                    onChange={handleChange}
                />
                Female
             <input
             
                id="female"
                value="female"
                name="gender"
                type="radio"
                onChange={handleChange}
            />
            </div>
            </div>
                
                <button className='form-input-btn'
                type='submit'>
                    Sign up
                </button>
                <span className='form-input-login' >
                    Already have an account? Login <a 
                    href='./FormLogin'>here</a>
                </span>

            </form>
        // </div>
    )
}

export default FormSignup
