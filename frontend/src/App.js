import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import ProductList from './Components/Products/ProductList';
import FeaturedProducts from './Components/FeaturedProducts/FeaturedProducts';
import CallToAction from './Components/CallToAction/CallToAction';
import Form from './Components/Form/Form';
import Footer from './Components/Footer/Footer';
import ProductDetail from './Components/ProductDetail/ProductDetail';
// import Login from './Components/Login/Login';
import LoginSignup from './Components/Authentication/LoginSignup';

function App() {
  return (
    <Router>
    
        <div className="App">
        <Navbar></Navbar>
        <Routes>
        <Route path= '/' element = { <>
        <Hero></Hero>
        <h3 className='popular'>Popular Products</h3>
        <ProductList></ProductList>
        <h3 className='featured'>Featured Products</h3>
        <hr class="colorful-line"/>
        <FeaturedProducts></FeaturedProducts>
        <CallToAction></CallToAction>
        <Form></Form>
        <Footer></Footer> </>
        
      } />
            <Route path='/ProductDetail/:id' element={<ProductDetail/>}/>
            {/* <Route path='/login' element={<Login/>}/> */}
              <Route path='/login' element={<LoginSignup />} />
          </Routes></div>
        </Router>
  
   
  );
}

export default App;