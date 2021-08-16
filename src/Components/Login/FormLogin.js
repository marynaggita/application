import React, { useState } from 'react';
import FormSignin from './FormSignin';
import Dashboard from '../Dashboard/Dashboard';
import ScrollToTop from '../../ScrollToTop';

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
