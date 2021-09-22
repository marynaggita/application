import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
import { AnswerYo } from "./Components/AnswerYo/answeryo";
import Services from "./Components/Services/Services"
import Checkout from "./Components/CheckOut/Checkout";
import SignIn from "./Components/login/signinForm";
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
import Appbar from "./Components/Appbar/appbarLanding";
import CardTest from "./Components/Cards/CardsTrial";
import CourseTest from "./Components/Cards/CardsFullTrial";
import Course from "./Components/CourseSection/Course";
import { About } from "./Components/About/About";



function App() {
  return (
    <>
    
    <Router>
      <Switch>
    
        <Route path ='/' exact component={LandingPage} />
        <Route path ='/SignUp'  component={SignUpForm} />
        <Route path ='/Dashboard'  component={Dashboard} />
        <Route path ='/Services'  component={Services} />
        <Route path ='/AnswerYo'  component={AnswerYo} />
        <Route path ='/Checkout'  component={Checkout} />
        <Route path ='/Signin'  component={SignIn} />
        <Route path = '/Reset'  component ={Reset} />
        <Route path = '/ShortCourses'  component ={ShortCourses} />
        <Route  path ='/SocialInclusionandGender'  component={SocialInclusionandGender} />
        <Route path = '/FinancialManagement' component={FinancialManagement}/>
        <Route path ='/DealingwithAttitudeandMindests' component={DealingwithAttitudesandMindsets} />
        <Route path = '/GrantDevelopment' component= {GrantDevelopment} />
        <Route path = '/MentalHealth' component= {MentalHealth} />
        <Route path = '/LeadershipEtiquette' component= {LeadershipEtiquette} />
        <Route path = '/ImpactfulYouthPrograms' component= {ImpactfulYouthPrograms} />
        <Route path = '/checkout' component={Checkout} />
        <Route path='/appbar'  component={Appbar} />
        <Route path='/cardtest'  component={CardTest} />
        <Route path='/coursetest'  component={CourseTest} />
        <Route path ='/courselist' component={Course}  />
        <Route path ='/About' component={About}  />
       
      </Switch>
    </Router>
  
  </>
  )
}

export default App;
