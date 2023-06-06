
import './App.css';
import { Route,Routes } from 'react-router-dom';
import { Login} from './Login/Login';
import {Signup} from './Signup/Signup.js';
import {Upload}  from './upload/Upload';

import YourComponent from './main/main';
import Page404 from './404/404';
import RequireAuthf from './Routeconfig/RequireAuthf';
import RequireAuthst from './Routeconfig/RequireAuthst';
import { useEffect, useState } from 'react';
import { AboutUs } from './aboutus/aboutUs';
import ContactUs from './contactus/ContactUs';






function App() {
  const Logout = () => {
    localStorage.clear();
    window.location.reload();
  }
  useEffect(() => {
    document.body.style.zoom = "80%";
  }, []);
  
  
  return (
    <div className="App">
      {( localStorage.getItem('User') === "Student" || localStorage.getItem('User') === "Faculty") && (
        <h3><button className="btn btn-outline-danger" onClick={Logout}>Logout</button></h3>
      )}
      <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='/Log' element={<Login/>}/>
        <Route path='/Signup' element={<Signup/>}/>
        <Route path='/about' element={<AboutUs/>}/>
        <Route path='/contact' element={<ContactUs/>}/>
        
        <Route element={<RequireAuthf/>}>
        <Route path='/upload' element={<Upload/>}/>
        </Route>
        <Route element={<RequireAuthst />}>
        <Route path='/main' element={<YourComponent/>}/>
        </Route>


        <Route path='/*' element={<Page404/>}></Route>
        
      </Routes>
    </div>
  );
}

export default App;
