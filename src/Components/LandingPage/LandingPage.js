import React from 'react';
import Cards from '../Cards/Cards';
import HeaderSection from '../LandingPage/HeaderSection/HeaderSection'
// import Navbar2 from './Navbar2';
import Footer from '../../Components/Footer/Footer'

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