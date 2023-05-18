
import { Routes,Route } from 'react-router-dom';




//pages
import Loginst from './userManagement/loginst';
import { Signup } from './userManagement/signup';
import { Logint } from './userManagement/logint';
import { Main } from './display&upload/main';
import { useEffect, useState } from 'react';
import Loginservice from './services/Loginservice';
import { Upload } from './display&upload/Upload';




function App() {   
  const [details,setDetails] = useState([]);                                                       
  const getInputDetails = (data) =>{
    setDetails(data);
  }
  // useEffect(()=>{return Loginservice(details)},[])

  return (
    <Routes>
      <Route path='/' element = {<Loginst getInputDetails={getInputDetails}/>}/>
      <Route path='/Signup' element = {<Signup/>}/>
      <Route path='/loginteacher' element = {<Logint/>}/>
      <Route path='/main' element={<Main/>}/>
      <Route path='/Upload' element={<Upload/>}/>
    </Routes>

  );
}

export default App;
