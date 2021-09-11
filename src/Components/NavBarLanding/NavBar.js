import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Button } from '../../globalStyles';
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
} from './NavBarElements';

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
            <NavLogo  onClick={closeMobileMenu}>
               <img src="/images/logo.svg" alt=" " width="130" noWrap/> Global Alternatives Online Platform 
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes color="white" /> : <FaBars color="white" />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks to='/About' onClick={closeMobileMenu}>
                  About Us
                </NavLinks>
              </NavItem>
              <NavItemBtn>
                {button ? (
                  <NavBtnLink to='/SignUp'>
                    <Button primaryprice>SIGN UP</Button>
                  </NavBtnLink>
                ) : (
                  <NavBtnLink to='/SignUp'>
                    <Button onClick={closeMobileMenu} fontBig primary>
                      SIGN UP
                    </Button>
                  </NavBtnLink>
                )}
              </NavItemBtn>
              <NavItemBtn>
                {button ? (
                  <NavBtnLink to='/Signin'>
                    <Button primaryprice>SIGN IN</Button>
                  </NavBtnLink>
                ) : (
                  <NavBtnLink to='/Signin'>
                    <Button onClick={closeMobileMenu} fontBig primary>
                      SIGN IN
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