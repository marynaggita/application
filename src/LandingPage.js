import React from 'react';
import Cards from './Cards';
import HeaderSection from './HeaderSection';
// import Navbar2 from './Navbar2';
import Footer from './Footer';

const LandingPage = () => {
    return (
        <div>
            {/* <Navbar2 /> */}
            <HeaderSection />
            <Cards />
            <Footer />
        </div>
    )
}

export default LandingPage;