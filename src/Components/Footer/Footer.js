
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
