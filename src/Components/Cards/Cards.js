import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Our Vision</h1>
      <h2>Becoming a leader in Innovations for humanity and development</h2>
      <h1>Our Mission</h1>
      <h2>Saving lives Now and for the future generations and providing alternatives and programs that work BEST.</h2>
      <h1>Check out services provided!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/courses.jpg'
              text='Take a short course in Leadership and Management, Finance management, Gender, youth, children and social inclusion issues, Entrepreneurship among others.'
              label='Short Courses'
              // path='/shortcourses'
              
            />
            <CardItem
              src='images/capacity.jpg'
              text='Get to know about the consultancy and capacity building services offered by a pool of academic and practicing professionals from the fields of Third sector, public, private and academia'
              label='consultancy and capacity building services'
              // path='/services'
            />
            <CardItem
              src='images/mental.jpg'
              text='Get information about mental health services and products'
              label='Mental Health'
              // path='/services'
            />

   
          </ul>
        </div>
      </div>
      <h1>A glance of different courses provided!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/gender.jpg'
              text='Explore the concept that addresses improving access to livelihood assets and services for ALL, including the women, poor, and excluded.'
              label='Social inclusion and Gender'
              path='/shortcourses'
              
            />
            <CardItem
              src='images/grants.jpg'
              text='Explore the key aspects of development,the techniques in writing and the various methods of management.'
              label='Grant Development, writing and Management'
              path='/shortcourses'
            />
            <CardItem
              src='images/Leadership.jpg'
              text='Explore the qualities of a great leader and the descriptions apply to aspects of etiquette such as courtesy, decency, dignity, and rules.'
              label='Leadership Etiquete and Traction '
              path='/shortcourses'
            />
            <CardItem
              src='images/youth.jpg'
              text='Expore the several designs of the parameters of the program that engage the youth.'
              label='Developing Impactful Youth Programs'
              path='/shortcourses'
            />
          </ul>
        </div>
      </div>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/financialm.png'
              text='Explore different processes of planning, organizing, controlling and monitoring financial resources with a view to achieve organizational goals and objectives.'
              label='Financial Management'
              path='/shortcourses'
              
            />
            <CardItem
              src='images/mentalh.jpg'
              text='Explore the realities of living with mental health and improve your wellbeing.'
              label='Mental health'
              path='/shortcourses'
            />
            <CardItem
              src='images/attitude.jpeg'
              text=' Explore about mindset, the ideas and attitudes one has that shapes the way one thinks about themselves and the world.'
              label='Dealing with attitudes and mindsets'
              path='/shortcourses'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;