import React from "react";
import "./App.css";
import Form from "./Components/Signup/Form";
import FormLogin from "./Components/Login/FormLogin";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LandingPage from "./Components/LandingPage/LandingPage";
import Dashboard from "./Components/Dashboard/Dashboard";




function App() {
  return (
    <>
    <Router>
      <Switch>
    
        <Route path ='/' exact component={LandingPage} />
        <Route path ='/Form'  component={Form} />
        <Route path ='/FormLogin'  component={FormLogin} />
        <Route path ='/Dashboard'  component={Dashboard} />
       
      </Switch>
    </Router>
  
  </>
  )
}

export default App;
