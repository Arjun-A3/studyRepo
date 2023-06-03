
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
export const user = "";


// const getCacheData = async (cacheName, url) => {
//   if (typeof caches === 'undefined') return null;
//   const cacheStorage = await caches.open(cacheName);
//   const cachedResponse = await cacheStorage.match(url);
//   if (!cachedResponse || !cachedResponse.ok) {
//     return null;
//   } else {
//     const data = await cachedResponse.json();
//     return data;
//   }
// };


function App() {
  const Logout = () => {
    // caches.keys().then((names)=>{names.forEach((name)=>{caches.delete(name);})})
    localStorage.clear();
    window.location.reload();
  }
  useEffect(() => {
    document.body.style.zoom = "90%";
  }, []);
  
  //  useEffect(() => {
  //   const data = window.localStorage.getItem('User');
  //   if ( data !== null ) setuser(data);
  // });
  
  // const [user,setuser] = useState("");
  //   useEffect(()=>{
  //   getCacheData('userInfo','http://localhost:3000');
  // })
  // const getCacheData = async(cacheName , url) =>{
  //   if( typeof caches === 'undefined') return false;
  //   const cacheStorage = await caches.open(cacheName);
  //   const cachedResponse = await cacheStorage.match(url);
  //   if(!cachedResponse ||!cachedResponse.ok)
  //   {
  //     setuser("Not allowed")
  //   }
  //   else{
  //     cachedResponse.json().then((item)=>{setuser(item)}) // in this line the item is updating to the chache value but user is not getting updated
  //   }
  //   alert(user);
  // }
  // useEffect(() => {
  //   (async () => {
  //     const data = await getCacheData('userInfo', 'http://localhost:3000');
  //     if (data !== null) {
  //       setuser(data);
  //     } else {
  //       setuser('Not allowed');
  //     }
  //   })();
  // },);
  return (
    <div className="App">
      {( localStorage.getItem('User') === "Student" || localStorage.getItem('User') === "Faculty") && (
        <h3><button className="btn btn-outline-danger" onClick={Logout}>Logout</button></h3>
      )}
      <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='/Log' element={<Login/>}/>
        <Route path='/Signup' element={<Signup/>}/>
        
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
