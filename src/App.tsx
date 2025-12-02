import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { CartProvider } from "./context/CartContext";
import Navbar from "./components/Navbar";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import ProductDetails from "./pages/ProductDetails";

function App() {
  // Add a state to manage cart count
  const [cartCount, setCartCount] = useState(0);

  return (
    <CartProvider>
    <Router>
      {/* Pass cartCount as prop */}
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </Router>
    </CartProvider>
  );
}

export default App;

