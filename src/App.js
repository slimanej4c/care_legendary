import logo from './logo.svg';
import './App.css';
import {Route ,Routes ,BrowserRouter} from 'react-router-dom'
import { motion , AnimatePresence  } from 'framer-motion';
import Layout from './Hocs/Layout';
import Home from './Container/Home';
import {useLocation} from "react-router"
import Contact from './Container/Contact'
function App(props) {
  const location=useLocation()
  return (
    
 
   <Layout>
     <AnimatePresence exitBeforeEnter>
    <Routes key={location.pathname} location={location}>
     <Route exact path='/care_legendary' element={<Home/>}></Route>
     <Route exact path='/contact' element={<Contact/>}></Route>
    
    
    </Routes>
    </AnimatePresence>
   </Layout>
   
  );
}

export default App;
