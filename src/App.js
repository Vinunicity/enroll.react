import React from 'react';
import logo from './logo.svg';
import './App.css';
// import Starttpl from './component/Starttpl';
// import AccountSetup from './component/withstyles/AccountSetup';
// import Summary from './component/withstyles/Summary';
import  {BrowserRouter as Router, Switch, Route }from'react-router-dom';
import Start from './component/With Mat-UI/Flex/Start';
import AccountSetup from './component/With Mat-UI/AccountSetup';
import Summary from './component/With Mat-UI/Summary';



function App() {
  return (
    // <Router>
    // <div className="App">
    //   <Switch>
    //  <Route path = "/" exact component = {Start}></Route>
    //  <Route path = "/account_setup" component = {AccountSetup}></Route>
    //  <Route path = "/summary" component = {Summary}></Route>
    //  </Switch>
     
    // </div>
    // </Router>
    // <div>
    // {/* <Summary></Summary> */}
    // {/* <AccountSetup></AccountSetup> */}
    // <Start></Start>
    // </div>
    <Start></Start>
  );
}

export default App;
