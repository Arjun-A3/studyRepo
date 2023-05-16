
import { Routes,Route } from 'react-router-dom';




//pages
import Loginst from './components/loginst';
import { Signup } from './components/signup';
import { Logint } from './components/logint';
import { Main } from './components/main';




function App() {                                                                                             
  return (
    <Routes>
      <Route path='/' element = {<Loginst/>}/>
      <Route path='/Signup' element = {<Signup/>}/>
      <Route path='/loginteacher' element = {<Logint/>}/>
      <Route path='/main' element={<Main/>}/>
    </Routes>

  );
}

export default App;
