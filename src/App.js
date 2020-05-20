import React from 'react';
import logo from './logo.svg';
import './App.css';
import Starttpl from './component/Starttpl';
import AccountSetup from './component/AccountSetup';
import Summary from './component/Summary';
import  {BrowserRouter as Router, Switch, Route }from'react-router-dom';


function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
     <Route path = "/" exact component = {Starttpl}></Route>
     <Route path = "/account_setup" component = {AccountSetup}></Route>
     <Route path = "/summary" component = {Summary}></Route>
     </Switch>
     
    </div>
    </Router>
  );
}

export default App;
