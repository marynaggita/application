import React from "react";
import "./App.css";
import FormLogin from "./Components/Login/FormLogin";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LandingPage from "./Components/LandingPage/LandingPage";
import Dashboard from "./Components/Dashboard/Dashboard";
import Courses from "./Components/Courses/Courses";
import { AnswerYo } from "./Components/AnswerYo/answeryo";
import Services from "./Components/Services/Services"
import Price from "./Components/price/Price";
import Checkout from "./Components/CheckOut/Checkout";
import SignIn from "./Components/login/signin";
import SignUp from "./Components/SignUP/SignUp";
import SignUpForm from "./Components/SignUP/SignUpForm";







function App() {
  return (
    <>
    
    <Router>
      <Switch>
    
        <Route path ='/' exact component={LandingPage} />
        <Route path ='/SignUpForm'  component={SignUpForm} />
        <Route path ='/FormLogin'  component={FormLogin} />
        <Route path ='/Dashboard'  component={Dashboard} />
        <Route path ='/Services'  component={Services} />
        <Route path ='/Courses'  component={Courses} />
        <Route path ='/AnswerYo'  component={AnswerYo} />
        <Route path ='/Price'  component={Price} />
        <Route path ='/Checkout'  component={Checkout} />
        <Route path ='/Signin'  component={SignIn} />
        <Route path = '/SignUp'  component ={SignUp} />
       
      </Switch>
    </Router>
  
  </>
  )
}

export default App;
