
import './App.css';
import { Route,Routes } from 'react-router-dom';
import { Login, PrivateRoutes } from './Login/Login';
import {Signup} from './Signup/Signup.js';
import {Upload}  from './upload/Upload';
import Hero from './landing/landing';
import YourComponent from './main/main';
import Page404 from './404/404';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='/Log' element={<Login/>}/>
        <Route path='/Signup' element={<Signup/>}/>
        <Route path='/*' element={<Page404/>}></Route>
        <Route element={<PrivateRoutes/>}>
        <Route path='/Stu' element={<YourComponent/>}exact/>
        <Route path='/upload' element={<Upload/>}/>
        </Route>
        
      </Routes>
    </div>
  );
}

export default App;
