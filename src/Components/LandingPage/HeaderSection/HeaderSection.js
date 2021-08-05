import React from 'react';
import './HeaderSection.css';
import Button from '../../Button/Button';
import { Link } from 'react-router-dom';

const HeaderSection = () => {
    return (
        <>
        <div className='landing-container'>
            <h1>Welcome to the Global Alternatives Learning Platform.</h1>
            <p>Get started by creating an account or signing in</p>
            <div className='landing-btns'>
            <Link to='/Form' className='btn-mobile'>
                <Button 
                className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn--large'>
                     SIGN UP                   
                </Button>
            </Link>
            <Link to='/FormLogin' className='btn-mobile'>
                <Button 
                className='btns'
                buttonStyle='btn--primary'
                buttonSize='btn--large'>
                     SIGN IN  <i className='far fa-play-circle' />                 
                </Button>
                </Link>
            </div>
        </div>
        
        
        </>
    );
}

export default HeaderSection;
