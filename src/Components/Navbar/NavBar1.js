import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { useDispatch } from 'react-redux';
import { logout, selectUser } from '../../features/userSlice';
import { Button } from '../../globalStyles';
import { useSelector } from 'react-redux';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavItem,
  NavItemBtn,
  NavLinks,
  NavBtnLink
} from './NavBarEl';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  
  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to='/' onClick={closeMobileMenu}>
            <img src="./images/logo.svg" alt=""  width="100"/>
              <span>Global Alternatives Online Platform</span>
              
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks to='/courselist' onClick={closeMobileMenu}>
                  Courses
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='/AnswerYo' onClick={closeMobileMenu}>
                  AnswerYoApp
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='/Services' onClick={closeMobileMenu}>
                  Consultancy Services 
                </NavLinks>
              </NavItem>
              <NavItemBtn>
                {button ? (
                  <NavBtnLink to='/'> 
                    <Button primaryprice >LOGOUT</Button>
                  </NavBtnLink>
                ) : (
                  <NavBtnLink to='/SignUp'>
                    <Button onClick={closeMobileMenu}  fontBig primary >
                      LOGOUT
                    </Button>
                  </NavBtnLink>
                )}
              </NavItemBtn>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;