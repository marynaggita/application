import React from 'react';
import Footer from '../Components/Footer/Footer'
import Navbar from '../Components/NavBarLanding/NavBar';
import SignInSide from '../Components/InfoSection/infosection3';
import CardTest from '../Components/Cards/CardsTrial';
import InfoSection from '../Components/InfoSection';
import InfoSection2 from '../Components/InfoSection/InfoSection2';



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