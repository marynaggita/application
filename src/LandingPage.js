import React from 'react';
import './LandingPage.css';
import Button from './Button';
import { Link } from 'react-router-dom'

const LandingPage = () => {
    return (
        <>
        <div className='landing-container'>
        <img src='img/logo.svg' alt='logo'
                className='landing-img'/>
                
            <h1>GLOBAL LEARNING ADVENTURE AWAITS</h1>
            <p>What are you waiting for?</p>
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

export default LandingPage
