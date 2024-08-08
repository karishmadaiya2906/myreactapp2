import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Pages/Home';
import Items from './Pages/Items';
import Checkout from './Pages/Checkout'
import About from './Pages/About';
import Contact from './Pages/Contact';
import Appp from './Pages/Appp'




function App() {
  return (
    <div> 
      
  <BrowserRouter basename="/my-react-app">  
  <Routes>
    
   <Route path="/" element={<Home/>}/>
  <Route path='/About' element={<About/>}/>
  <Route path='/Contact' element={<Contact/>}/>
  <Route path="/Items" element={<Items addProductToCart={()=>{}}/>}/>
  <Route path="/Checkout" element={<Checkout/>} />
 
  <Route path='/Appp' element={<Appp/>}/>
  
  
    

   
  </Routes>
  
  </BrowserRouter>
 
   </div>
  
  );
};

export default App;
          

