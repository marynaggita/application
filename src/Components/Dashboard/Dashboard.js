import React from 'react';
// import Courses from './Components/Courses/index';
import Navbar from '../Navbar/NavBar1';
import Course from '../Courses/Courses';
import Footer from '../Footer/Footer';



const Dashboard = () => {
    return (
        <div>
            <Navbar />
            <div  style={{fontSize:'20px',padding:'10px',background:'red'}}>
            <b>Contact us via Email: alternativesglobal@gmail.com  |   Director on +256-782397529</b>
            </div><hr />
            <h1>What to expect in this platform</h1>
            <h3>The Global Online Learning Platform is  a multifaceted space where you can </h3>
            <h4>Take a short course in Leadership and Management, Finance management, Gender, youth, children and social inclusion issues, Entrepreneurship among others.</h4>
            <h4>Get to know about the consultancy and capacity building services offered by a pool of academic and practicing professionals from the fields of Third sector, public, private and academ</h4>
            <h4>Get information about mental health services and products</h4>
            <Footer />
            
        </div>
    )
}

export default Dashboard;
