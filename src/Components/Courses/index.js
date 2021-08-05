import React from 'react';
import "./Course.css";
import courseItem from './courseItem';

   function Courses() {
       return (
       
        <div className='courses'>
            <div style={{fontSize:'20px',padding:'20px',background:'red'}}>
            <b>Contact via Email:alternativesglobal@gmail.com  |   Director on +256-782397529</b>
            </div>
            <hr />
            <h3 style={{fontSize:'24px',color: 'red'}}>The latest courses offered</h3>
            <div className='course__container'>
        <div className='course__wrapper'>
          <ul className='course__items'>
            <courseItem
              src='images/courses.jpg'
              text='Take a short course in Leadership and Management, Finance management, Gender, youth, children and social inclusion issues, Entrepreneurship among others.'
              label='Short Courses'
              // path='/shortcourses'
            />
            <courseItem
              src='images/capacity.jpg'
              text='Get to know about the consultancy and capacity building services offered by a pool of academic and practicing professionals from the fields of Third sector, public, private and academia'
              label='consultancy and capacity building services'
              // path='/services'
            />
            <courseItem
              src='images/mental.jpg'
              text='Get information about mental health services and products'
              label='Mental Health'
              // path='/services'
            />
          </ul>
        </div>
      </div>
      
         
            </div>
        
       );
       } 
     
export default Courses;
