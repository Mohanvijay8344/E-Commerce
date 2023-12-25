import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginSignup from "./components/Pages/LoginSignup";
import Shop from "./components/Pages/Shop";
import ShopCategory from "./components/Pages/ShopCategory";
import Product from "./components/Pages/Product";
import Cart from "./components/Pages/Cart";
import Footer from "./components/Footer/Footer";
import banner_kids from "./components/assets/banner_kids.png"
import banner_mens from "./components/assets/banner_mens.png"
import banner_women from "./components/assets/banner_women.png"
import Login from "./components/Pages/login";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/mens" element={<ShopCategory banner={banner_mens} category="men" />} />
          <Route path="/womens" element={<ShopCategory banner={banner_women} category="women" />} />
          <Route path="/kids" element={<ShopCategory banner={banner_kids} category="kid" />} />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />}></Route>
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/signup" element={<LoginSignup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
