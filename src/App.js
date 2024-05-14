
import React from 'react';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Cover from './components/pages/Cover';
import Home from './components/pages/Home';
import Home2 from './components/pages/Home2';
import Home3 from './components/pages/Home3';
import Home4 from './components/pages/Home4';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
function App() {
  return (
  
   <BrowserRouter>
   
   <Routes>
   <Route path='/' element={<Cover/>}/>
   </Routes>   
   

   <Routes>
   <Route path='/home' element={<Home/>}/>
   <Route path='/about' element={<About/>}/>
   <Route path='/home2' element={<Home2/>}/>
   <Route path='/home3' element={<Home3/>}/>
   <Route path='/home4' element={<Home4/>}/>
   <Route path='/contact' element={<Contact/>}/>
   </Routes>   
   </BrowserRouter>
  
  );
}

export default App;
