import React from 'react';
import { Button } from '../../globalStyles';
import './HeroSection.css';
import { Link } from 'react-router-dom';



export default function HeroSection() {
  

  return (
    <>
    
    <section id='main'>
      <div className="main-text">
        Welcome to the <span>Global Alternatives Online Platform.</span><br />
        
        <div className="subtext">An interactive platform that supports learning at convenience.We aim to make a contribution to your knowledge base and be sure that you will gain a lot.</div>
        <br />
       
          <Button onClick='/SignUp' >
            GET STARTED
          </Button>
        
          
      </div>
      <img src="./images/Online.jpg" alt=""/>
    </section>
    
    
  </>
  )
}
