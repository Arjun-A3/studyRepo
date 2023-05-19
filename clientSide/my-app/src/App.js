
import { Routes,Route } from 'react-router-dom';




//pages
import Loginst from './userManagement/loginst';
import { Signup } from './userManagement/signup';
import { Logint } from './userManagement/logint';
import { Main } from './display&upload/main';
import { useEffect, useState } from 'react';
import Loginservice from './services/Loginservice';
import { Upload } from './display&upload/Upload';
import Display from './display&upload/display';
import Csbs from './dept/csbs';
import Aids from './dept/aids';
import Cse from './dept/cse';
import Mech from './dept/mech';
import Eee from './dept/eee';
import Aero from './dept/aero';
import Agri from './dept/agri';
import Ece from './dept/ece';
import Mba from './dept/mba';








function App() {   
  const [details,setDetails] = useState([]);                                                       
  const getInputDetails = (data) =>{
    console.log(data);
  }
  // useEffect(()=>{return Loginservice(details)},[])

  return (
    <Routes>
      <Route path='/' element = {<Loginst getInputDetails={getInputDetails}/>}/>
      <Route path='/Signup' element = {<Signup/>}/>
      <Route path='/loginteacher' element = {<Logint/>}/>
      <Route path='/main' element={<Main/>}/>
      <Route path='/Upload' element={<Upload/>}/>
      <Route path='/csbs' element={<Csbs/>}/>
      <Route path='/aids' element={<Aids/>}/>
      <Route path='/cse' element={<Cse/>}/>
      <Route path='/mech' element={<Mech/>}/>
      <Route path='/eee' element={<Eee/>}/>
      <Route path='/aero' element={<Aero/>}/>
      <Route path='/agri' element={<Agri/>}/>
      <Route path='/ece' element={<Ece/>}/>
      <Route path='/mba' element={<Mba/>}/>
      <Route path='/display' element={<Display/>}/>

      
      




    </Routes>

  );
}

export default App;
