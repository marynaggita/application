// import React from 'react';
// import './Footer.css';
// import { Button } from './Button';
// import { Link } from 'react-router-dom';


// function Footer() {
//   return (
//     <div className='footer-container'>
//        <img src='img/logo.svg' alt='logo'
//           className='footer-logo'/>
//       <section className='footer-subscription'>
//         <p className='footer-subscription-heading'>
//           Join the Online Platform newsletter to receive our updates
//         </p>
//         <p className='footer-subscription-text'>
//           You can unsubscribe at any time.
//         </p>
//         <div className='input-areas'>
//           <form>
//             <input
//               className='footer-input'
//               name='email'
//               type='email'
//               placeholder='Your Email'
//             />
//             <Button buttonStyle='btn--outline'>Subscribe</Button>
//           </form>
//         </div>
//       </section>
//       <div class='footer-links'>
        
//         <div className='footer-link-wrapper'>
                 
//           <div class='footer-link-items'>
//           <h2>Contact Us</h2>
//             <Link to='alternativesglobal@gmail.com'>Email: alternativesglobal@gmail.com </Link>
//             <h2>Social Media</h2>
           
//             <Link to='https://www.facebook.com/globalalternatives'>Facebook</Link>
//             <Link to='/'>Twitter</Link>
//             <Link to='www.globalalternativesug.org'>Website</Link>
//           </div>
//         </div>
//       </div>
//       <section class='social-media'>
//         <div class='social-media-wrap'>
//           <div class='footer-logo'>
//           </div>
//           <small class='website-rights'>GlobalAlternatives © 2021</small>
//           <div class='social-icons'>
//             <Link
//               class='social-icon-link facebook'
//               to='/'
//               target='_blank'
//               aria-label='Facebook'
//             >
//               <i class='fab fa-facebook-f' />
//             </Link>
//             <Link
//               class='social-icon-link twitter'
//               to='/'
//               target='_blank'
//               aria-label='Twitter'
//             >
//               <i class='fab fa-twitter' />
//             </Link>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default Footer;
import React from "react";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./Footerstyles";

const Footer = () => {
return (
	<Box>
	<h1 style={{ color: "red",
				textAlign: "center",
				marginTop: "-50px" }}>
		Global Alternatives Learning Platform
	</h1>
	<Container>
		<Row>
		<Column>
			<Heading>About Us</Heading>
			<FooterLink href="#">Aim</FooterLink>
			<FooterLink href="#">Vision</FooterLink>
			
		</Column>
		<Column>
			<Heading>Social Media</Heading>
			<FooterLink href="#">
			<i className="fab fa-facebook-f">
				<span style={{ marginLeft: "10px" }}>
				Facebook
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-twitter">
				<span style={{ marginLeft: "10px" }}>
				Twitter
				</span>
			</i>
			</FooterLink>
		</Column>
		<Column>
		<img src='img/logo.svg' alt='logo'
                style={{width:"100%"}} /> 
			<span style={{color:"aqua",paddingTop:"40px"}} >&copy;{new Date().getFullYear()} Global Alternatives Learning Platform</span>
		</Column>
		</Row>
	</Container>
	</Box>
);
};
export default Footer;
