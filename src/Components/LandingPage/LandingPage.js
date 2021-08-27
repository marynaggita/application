import React from 'react';
import Cards from '../Cards/Cards';
import Footer from '../../Components/Footer/Footer'
import Navbar from '../NavBarLanding/NavBar';
import HeroSection from '../HeroSection/Herosection';


const LandingPage = () => {
    return (
        <div>
            <Navbar />
            <HeroSection />
            
            <Cards />
            <Footer />
        </div>
    )
}

export default LandingPage;