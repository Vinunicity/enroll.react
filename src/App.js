import React, { Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import {createUseStyles} from 'react-jss';
import Start from './component/Start';
import accountSetup from './component/AccountSetup';
import Summary from './component/Summary';
import  {BrowserRouter as Router, Switch, Route }from'react-router-dom';

 const useStyles = createUseStyles({
   title:{
     textAlign:"center",
   }
 })


 function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
     <Route path = "/" exact component = {Start}></Route>
     <Route path = "/account_setup" component = {accountSetup}></Route>
     <Route path = "/summary" component = {Summary}></Route>
     </Switch>
     
    </div>
    </Router>
    // <div>
    // {/* <Summary></Summary> */}
    // {/* <AccountSetup></AccountSetup> */}
    // <Start></Start>
    // </div>
    
  );
}

export default App;
