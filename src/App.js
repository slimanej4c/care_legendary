import logo from './logo.svg';
import './App.css';
import {Route ,Routes ,BrowserRouter} from 'react-router-dom'
import Layout from './Hocs/Layout';
import Home from './Container/Home';
function App() {
  return (
    <BrowserRouter>
 
   <Layout>
    <Routes >
     <Route exact path='/accueill' element={<Home/>}></Route>
    
    
    </Routes>

   </Layout>
   </BrowserRouter>
  );
}

export default App;
