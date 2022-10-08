import logo from './logo.svg';
import './App.css';
import {Route ,Routes ,BrowserRouter} from 'react-router-dom'
import { motion , AnimatePresence  } from 'framer-motion';
import Layout from './Hocs/Layout';
import Home from './Container/Home';
import {useLocation} from "react-router"
import Contact from './Container/Contact'
import Aprops from './Container/Aprops';
import Prestation from './Container/Prestation';
import Importation from './Container/Importation';
import Nos_vehicule from './Container/Nos_vehicule';
function App(props) {
  const location=useLocation()
  return (
    
 
   <Layout>
     <AnimatePresence mode='wait'>
    <Routes key={location.pathname} location={location}>
     <Route exact path='/care_legendary' element={<Home/>}></Route>
     <Route exact path='/contact' element={<Contact/>}></Route>
     <Route exact path='/apropos' element={<Aprops/>}></Route>
     <Route exact path='/prestation' element={<Prestation/>}></Route>
     <Route exact path='/importation' element={<Importation/>}></Route>
     <Route exact path='/nos_vehicule' element={<Nos_vehicule/>}></Route>
    
    
    </Routes>
    </AnimatePresence>
   </Layout>
   
  );
}

export default App;
