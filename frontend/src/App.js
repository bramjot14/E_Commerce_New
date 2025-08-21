import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import ProductList from './Components/Products/ProductList';
import FeaturedProducts from './Components/FeaturedProducts/FeaturedProducts';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Hero></Hero>
      <h3 className='popular'>Popular Products</h3>
      <ProductList></ProductList>
      <h3 className='featured'>Featured Products</h3>
      <FeaturedProducts></FeaturedProducts>
    </div>
  );
}

export default App;
