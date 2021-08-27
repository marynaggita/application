import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LandingPage from "./Components/LandingPage/LandingPage";
import Dashboard from "./Components/Dashboard/Dashboard";
import { AnswerYo } from "./Components/AnswerYo/answeryo";
import Services from "./Components/Services/Services"
import Checkout from "./Components/CheckOut/Checkout";
import SignIn from "./Components/login/signin";
import SignUp from "./Components/SignUP/SignUp";
import SignUpForm from "./Components/SignUP/SignUpForm";
import Reset from "./Components/PasswordReset/Reset";
import ShortCourses from "./Components/ShortCourses/ShortCourse2";
import SocialInclusionandGender from "./pages/CoursePage/SocialInclusionandGender";
import DealingwithAttitudesandMindsets from "./pages/CoursePage/DealingwithAttitudesandMindsets";
import FinancialManagement from "./pages/CoursePage/FinancialManagement";
import GrantDevelopment from "./pages/CoursePage/GrantDevelopment";
import MentalHealth from "./pages/CoursePage/MentalHealth";
import LeadershipEtiquette from "./pages/CoursePage/LeadershipEtiquette";
import ImpactfulYouthPrograms from "./pages/CoursePage/ImpactfulYouthPrograms";


function App() {
  return (
    <>
    
    <Router>
      <Switch>
    
        <Route path ='/' exact component={LandingPage} />
        <Route path ='/SignUpForm'  component={SignUpForm} />
        <Route path ='/Dashboard'  component={Dashboard} />
        <Route path ='/Services'  component={Services} />
        <Route path ='/AnswerYo'  component={AnswerYo} />
        <Route path ='/Checkout'  component={Checkout} />
        <Route path ='/Signin'  component={SignIn} />
        <Route path = '/SignUp'  component ={SignUp} />
        <Route path = '/Reset'  component ={Reset} />
        <Route path = '/ShortCourses'  component ={ShortCourses} />
        <Route  path ='/SocialInclusionandGender'  component={SocialInclusionandGender} />
        <Route path = '/FinancialManagement' component={FinancialManagement}/>
        <Route path ='/DealingwithAttitudeandMindests' component={DealingwithAttitudesandMindsets} />
        <Route path = '/GrantDevelopment' component= {GrantDevelopment} />
        <Route path = '/MentalHealth' component= {MentalHealth} />
        <Route path = '/LeadershipEtiquette' component= {LeadershipEtiquette} />
        <Route path = '/ImpactfulYouthPrograms' component= {ImpactfulYouthPrograms} />

        
       
      </Switch>
    </Router>
  
  </>
  )
}

export default App;
