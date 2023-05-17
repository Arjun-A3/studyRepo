
import { Routes,Route } from 'react-router-dom';




//pages
import Loginst from './components/loginst';
import { Signup } from './components/signup';
import { Logint } from './components/logint';
import { Main } from './components/main';
import { useEffect, useState } from 'react';
import Loginservice from './services/Loginservice';




function App() {   
  const [details,setDetails] = useState([]);                                                       
  const getInputDetails = (data) =>{
    setDetails(data);
  }
  useEffect(()=>{return Loginservice(details)},[])

  return (
    <Routes>
      <Route path='/' element = {<Loginst getInputDetails={getInputDetails}/>}/>
      <Route path='/Signup' element = {<Signup/>}/>
      <Route path='/loginteacher' element = {<Logint/>}/>
      <Route path='/main' element={<Main/>}/>
    </Routes>

  );
}

export default App;
