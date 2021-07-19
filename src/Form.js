import React, {useState} from 'react';
import FormSignup from './FormSignup';
import Dashboard from './Dashboard';
import './Form.css'

const Form = () => {
    const [isSubmited, setIsSubmited] = useState(false)

    function submitForm(){
        setIsSubmited(true);
    }
    return (
        <>
        {!isSubmited ? <FormSignup submitForm={submitForm} /> : <Dashboard />}
        </>
    )
}

export default Form;
