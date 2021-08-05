import React, {useState} from 'react';
import FormSignup from './FormSignup'
import Dashboard from '../Dashboard/Dashboard';
import './Form.css'
import ScrollToTop from '../../ScrollToTop';

const Form = () => {
    const [isSubmited, setIsSubmited] = useState(false)

    function submitForm(){
        setIsSubmited(true);
    }
    return (
        <>
        <ScrollToTop />
        {!isSubmited ? <FormSignup submitForm={submitForm} /> : <Dashboard />}
        </>
    )
}

export default Form;
