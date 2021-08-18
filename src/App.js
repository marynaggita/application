import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LandingPage from "./Components/LandingPage/LandingPage";
import Dashboard from "./Components/Dashboard/Dashboard";
import Courses from "./Components/Courses/Courses";
import { AnswerYo } from "./Components/AnswerYo/answeryo";
import Services from "./Components/Services/Services"
import ShortCourse from "./Components/ShortCourses/ShortCourse";
import Checkout from "./Components/CheckOut/Checkout";
import SignIn from "./Components/login/signin";
import SignUp from "./Components/SignUP/SignUp";
import SignUpForm from "./Components/SignUP/SignUpForm";
import Reset from "./Components/PasswordReset/Reset"




function App() {
  return (
    <>
    
    <Router>
      <Switch>
    
        <Route path ='/' exact component={LandingPage} />
        <Route path ='/SignUpForm'  component={SignUpForm} />
        <Route path ='/Dashboard'  component={Dashboard} />
        <Route path ='/Services'  component={Services} />
        <Route path ='/Courses'  component={Courses} />
        <Route path ='/AnswerYo'  component={AnswerYo} />
        <Route path ='/ShortCourse'  component={ShortCourse} />
        <Route path ='/Checkout'  component={Checkout} />
        <Route path ='/Signin'  component={SignIn} />
        <Route path = '/SignUp'  component ={SignUp} />
        <Route path = '/Reset'  component ={Reset} />
        
       
      </Switch>
    </Router>
  
  </>
  )
}

export default App;
