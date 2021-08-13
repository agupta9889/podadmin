import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from "./component/Login";
import Dashboard from "./component/Dashboard";
// import {Container, Row, Col} from "reactstrap";


function App() {
  // const [token, setToken] = useState();
  // console.log('aaaaa', token);

  // if(!token) {
  //   return <Login setToken={setToken} />
  // }
  
  return (
    // <div className="wrapper">
    //   <BrowserRouter>
    //     <Switch>
    //       <Route path="/login">
    //         <Login /> 
    //       </Route>
    //       <Route path="/dashboard">
    //         <Dashboard />
    //       </Route>
    //     </Switch>
    //   </BrowserRouter>
    // </div>

     //<Login /> 
    <Dashboard />
  );
}

export default App;
