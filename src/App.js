import React from "react";
import "./App.css";
import Form from "./Form";
import FormLogin from "./FormLogin";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LandingPage from "./LandingPage";
import Dashboard from "./Dashboard";



function App() {
  return (
    <>
    <Router>
      <Switch>
        {/* <Route path ='/' exact component={LandingPage} />
        <Route path ='/Form'  component={Form} />
        <Route path ='/FormLogin'  component={FormLogin} />
        <Route path ='/Dashboard'  component={Dashboard} /> */}
        <Route path ='/'  component={Dashboard} />
      </Switch>
    </Router>
  
  </>
  )
}

export default App;
