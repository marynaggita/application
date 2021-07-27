import React, { useState } from 'react';
import FormSignin from './FormSignin';
import './Form.css'
import Dashboard from './Dashboard';
import ScrollToTop from './ScrollToTop';

const FormLogin = () => {
    const [isSubmited, setIsSubmited] = useState(false)

    function submitForm(){
        setIsSubmited(true);
    }
    return (
             <>
             <ScrollToTop />
        {!isSubmited ? <FormSignin submitForm=
            {submitForm} /> : <Dashboard />}
        </>
    )
}

export default FormLogin;
