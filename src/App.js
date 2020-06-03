import React, { Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import {createUseStyles} from 'react-jss';
import AccountSetup from './component/React-final-form/AccountSetup';
import Start from './component/React-final-form/Start';
import Summary from './component/React-final-form/Summary';
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
     <Route path = "/account_setup" component = {AccountSetup}></Route>
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
