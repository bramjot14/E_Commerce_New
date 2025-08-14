import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import ProductList from './Components/Products/ProductList';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Hero></Hero>
      <h3>Popular Products</h3>
      <ProductList></ProductList>

    </div>
  );
}

export default App;
