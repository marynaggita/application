import React from 'react';
import Cards from '../Cards/Cards';
import Footer from '../../Components/Footer/Footer'
import Navbar from '../NavBarLanding/NavBar';

import SignInSide from '../InfoSection/infosection3';
import CardTest from '../Cards/CardsTrial';
import InfoSection from '../InfoSection';
import InfoSection2 from '../InfoSection/InfoSection2';



const LandingPage = () => {
    return (
        <div>
            <Navbar />
            <SignInSide />
            
            <InfoSection  />
            <InfoSection2 />
            <CardTest />
            {/* <Cards /> */}
            <Footer />
        </div>
    )
}

export default LandingPage;