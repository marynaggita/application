import { Link } from 'react-router-dom';
import React, {useEffect, useState} from 'react';
import Button from '../Button/Button';
import './Navbar.css';


function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton =() => {
        if(window.innerWidth <= 960){
            setButton(false);
        }else {
            setButton(true);
        }
    };
    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
        <nav className='navbar'>
            <div className='navbar-container'>
                    <img src='img/logo.svg' alt='logo' style={{width:"40%"}} />          
            <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                    <Link to='/Dashboard' className='nav-links' onClick={closeMobileMenu}>
                       Short Courses  
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/AnswerYo' className='nav-links' onClick={closeMobileMenu}>
                       AnswerYo
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/Consultancy' className='nav-links' onClick={closeMobileMenu}>
                       Consultancy Services 
                    </Link>
                </li>
            </ul>
            {button && <Button buttonStyle='btn--outline'>LOG OUT</Button>}
            </div>
        </nav>
    </>
    )
}

export default Navbar;
