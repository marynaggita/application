import React from 'react';
import { useSelector } from 'react-redux';
import Dashboard from '../Dashboard/Dashboard';
import { selectUser } from '../../features/userSlice';
import SignIn from './signinForm';

const Signin = () => {
const user = useSelector(selectUser);

    return (
        <>
            {user ? <Dashboard /> : <SignIn />}
        </>
    )
}

export default Signin;
