import './App.css';
import React, { useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import Browse from './pages/Browse/Browse';
import AuthService from "./Service/AuthService.js";

const App = () => {  
  // const loginCheck = () => {
  //   const userData = localStorage.getItem('USER_DATA');
  //   const accessToken = JSON.parse(userData).data.accessToken;
  //   if(!accessToken) {      
  //     return;      
  //   } else {
  //     console.log('토큰인증');      
  //   }
  //   return accessToken;
  // };
  // useEffect(() => {
  //   loginCheck();    
  // },[]);
  
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={Home}/>
        <Route path="/login" component={Login}/>
        <Route path="/signup" component={SignUp}/>
        <Route path="/browse" component={Browse}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
