
import './App.css';
import { Route,Routes } from 'react-router-dom';
import { Login} from './Login/Login';
import {Signup} from './Signup/Signup.js';
import {Upload}  from './upload/Upload';

import YourComponent from './main/main';
import Page404 from './404/404';
import RequireAuthf from './Routeconfig/RequireAuthf';
import RequireAuthst from './Routeconfig/RequireAuthst';
export const user = "";


function App() {
  localStorage.setItem("User","");
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='/Log' element={<Login/>}/>
        <Route path='/Signup' element={<Signup/>}/>
        
        <Route element={<RequireAuthf />}>
        <Route path='/upload' element={<Upload/>}/>
        </Route>
        <Route element={<RequireAuthst />}>
        <Route path='/main' element={<YourComponent/>}exact/>
        </Route>


        <Route path='/*' element={<Page404/>}></Route>
        
      </Routes>
    </div>
  );
}

export default App;
