import {BrowserRouter,Routes,Route,} from 'react-router-dom'
import Home from './Pages/Home';
import Items from './Pages/Items';
import Checkout from './Pages/Checkout'
import About from './Pages/About';
import Contact from './Pages/Contact';




function App() {
  return (
    <div> 
      
  <BrowserRouter>  
  <Routes>
    
   <Route path="/" element={<Home/>}/>
  <Route path='/About' element={<About/>}/>
  <Route path='/Contact' element={<Contact/>}/>
  <Route path="/Items" element={<Items addProductToCart={()=>{}}/>}/>
  <Route path="/Checkout" element={<Checkout/>} />
  
  
  
    

   
  </Routes>
  
  </BrowserRouter>
 
   </div>
  
  );
};

export default App;
          

