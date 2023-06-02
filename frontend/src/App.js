
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


function App() {
  // localStorage.setItem("User","");
  const [user,setuser] = useState("");
    useEffect(()=>{
    getCacheData('userInfo','http://localhost:3000');
  })
  const getCacheData = async(cacheName , url) =>{
    if( typeof caches === 'undefined') return false;
    const cacheStorage = await caches.open(cacheName);
    const cachedResponse = await cacheStorage.match(url);
    if(!cachedResponse ||!cachedResponse.ok)
    {
      setuser("Not allowed")
    }
    else{
      cachedResponse.json().then((item)=>{setuser(item)})
    }
  }
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='/Log' element={<Login/>}/>
        <Route path='/Signup' element={<Signup/>}/>
        
        <Route element={<RequireAuthf user={user}/>}>
        <Route path='/upload' element={<Upload/>}/>
        </Route>
        <Route element={<RequireAuthst user={user} />}>
        <Route path='/main' element={<YourComponent/>}/>
        </Route>


        <Route path='/*' element={<Page404/>}></Route>
        
      </Routes>
    </div>
  );
}

export default App;
