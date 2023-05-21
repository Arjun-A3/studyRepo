
import { Routes,Route } from 'react-router-dom';

//pages
import Loginst from './userManagement/loginst';
import { Signup } from './userManagement/signup';
import { Logint } from './userManagement/logint';
import { Main } from './display&upload/main';
import { Upload } from './display&upload/Upload';
import Subdisplay from './display&upload/subDisplay';
import UnitDisplay from './display&upload/unitDisplay';
import Department from './dept/Department';

function App() {   
  
  return (

    <Routes>
      <Route path='/' element = {<Loginst />}/>
      <Route path='/Signup' element = {<Signup/>}/>
      <Route path='/loginteacher' element = {<Logint/>}/>
      <Route path='/main' element={<Main/>}/>
      <Route path='/Upload' element={<Upload/>}/>
      <Route path='/main/csbs' element={<Department/>}/>
      <Route path='/main/aids' element={<Department/>}/>
      <Route path='/main/mech' element={<Department/>}/>
      <Route path='/main/agri' element={<Department/>}/>
      <Route path='/main/aero' element={<Department/>}/>
      <Route path='/main/eee' element={<Department/>}/>
      <Route path='/main/ece' element={<Department/>}/>
      <Route path='/main/mba' element={<Department/>}/>
      <Route path='/main/cse' element={<Department/>}/>
      <Route path='/main/mca' element={<Department/>}/>
      <Route path='/main/bme' element={<Department/>}/>
      <Route path='/main/biotech' element={<Department/>}/>
     <Route path='/main/csbs/sem1' element={<Subdisplay/>}/>
     <Route path='/main/csbs/sem1/bcvs' element={<UnitDisplay/>}/>
    </Routes>
  );
}

export default App;
