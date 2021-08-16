import React, {useState} from 'react';

import Dashboard from '../Dashboard/Dashboard';
import SignUpForm from './SignUpForm';



const SignUp = () => {
    const [isSubmited, setIsSubmited] = useState(false)

    const submitForm = () =>{
        setIsSubmited(true);
    }
    return (
        <>
        {!isSubmited ? <SignUpForm submitForm={submitForm} /> : <Dashboard />}
        </>
    )
}

export default SignUp;