import React from 'react';
import '../Cards/Cards.css';
import CardItem from '../Cards/CardItem';
import Navbar from '../Navbar/NavBar1';

function Courses() {
  return (
      
    <div className='cards'>
        
        <div style={{fontSize:'20px',padding:'10px',background:'red'}}>
            <b>Contact us via Email: alternativesglobal@gmail.com  |   Director on +256-782397529</b>
            </div>
            <hr />
            <h1 style={{fontSize:'30px',color: 'red'}}>The short courses offered</h1>
            <h2 style={{fontSize:'20px',color: 'black'}}>Courses in Social inclusion and Gender </h2>      
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem
                        src='images/courses.jpg'
                        heading='Gender and Project planning and Management'
                    />
                    <CardItem
                        src='images/capacity.jpg'
                        heading='Gender, social inclusion and Extractives'
                    />
                    <CardItem
                        src='images/mental.jpg'
                        heading='21st Century skills every young person must have'
                     />   
            </ul>
        </div>
      </div>
      <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem
                        src='images/courses.jpg'
                        heading='Grant Development, writing and Management'
                    /> 
                    <CardItem
                        src='images/courses.jpg'
                        heading='Leadership Etiquete and Traction '
                    /> 
                    <CardItem
                        src='images/courses.jpg'
                        heading='Developing Impactful Youth Programs'
                    />
                    <CardItem
                        src='images/courses.jpg'
                        heading='Dealing with attitudes and mindsets'
                    />
            </ul>
        </div>
      </div>
     
      <h2 style={{fontSize:'20px',color: 'black'}}>Courses in Mental health </h2>      
      
      <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem
                        src='images/courses.jpg'
                        heading='Mental health amidst pandemics'
                    />
                    <CardItem
                        src='images/capacity.jpg'
                        heading='Mental health and Money'
                    />
                    <CardItem
                        src='images/mental.jpg'
                        heading='Young people’s mental health'
                     />   
                     <CardItem
                        src='images/mental.jpg'
                        heading='Mental health in the workplaces'
                     /> 
            </ul>
        </div>
      </div>
    </div>
  );
}

export default Courses;