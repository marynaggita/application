import React, { useState } from 'react';
import FormSignin from './FormSignin';
import './Form.css'
import Dashboard from './Dashboard';

const FormLogin = () => {
    const [isSubmited, setIsSubmited] = useState(false)

    function submitForm(){
        setIsSubmited(true);
    }
    return (
             <>
        {!isSubmited ? <FormSignin submitForm=
            {submitForm} /> : <Dashboard />}
        </>
    )
}

export default FormLogin;
