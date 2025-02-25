import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Products from "./components/Products";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";
import StartPage from "./components/StartPage";
import Slider from "./components/Slider";
import "./App.css";
import About from "./components/About";
import Footer from "./components/Footer";
import { CartProvider } from './components/CartProvider'; 

function App() {
  return (
    <CartProvider> 
      <Header />
      
      <Routes>
        <Route
          path="/"
          element={
            <>
              <StartPage />
              <Slider />
              <About />
            </>
          }
        />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>

      <Footer /> 
    </CartProvider>
  );
}

export default App;
