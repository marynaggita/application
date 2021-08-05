import React from 'react';
// import Courses from './Components/Courses/index';
import Navbar from '../Navbar/Navbar';
import Course from '../Courses/Courses';



const Dashboard = () => {
    return (
        <div>
            <Navbar />
            {/* <Courses /> */}
            <Course />
            
        </div>
    )
}

export default Dashboard;
