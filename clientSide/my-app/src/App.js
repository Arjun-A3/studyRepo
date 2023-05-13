
import { Routes,Route } from 'react-router-dom';


//pages
import { Logint } from './components/logint';
import { Loginst } from './components/loginst';
import { Signup } from './components/signup';
import { Main } from './components/main';


function App() {                                                                                             
  return (
   <Routes>
    <Route path="/" element={<Loginst />}/>
    <Route path="/signup" element={<Signup />}/>
    <Route path="/logint" element={<Logint />}/>
    
   </Routes>
  );
}

export default App;
