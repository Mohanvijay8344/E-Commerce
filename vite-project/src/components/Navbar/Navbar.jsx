import React, { useContext, useState } from "react";
import "./Navbar.css";
import logo from "../assets/logo.png"
import cart_icon from "../assets/cart_icon.png";
import { Link } from "react-router-dom";
import ShopCategory from "../Pages/ShopCategory";
import { ShopContext } from "../Context/ShopContext";

function Navbar() {

    const [menu, setMenu] = useState("shop")

    const { getTotalCartItems, totalCartItem } = useContext(ShopContext);

    const token = localStorage.getItem("token");

    const logout = () =>{
      localStorage.removeItem("token");
      window.location.reload();
    }
    
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="logo" />
        <p>E-Commerce</p>
      </div>
          <ul className="nav-menu">
            <li className={menu === "shop" ? "active" : ""} onClick={() => {setMenu("shop")}}><Link to='/'>Shop</Link></li>
            <li className={menu === "mens" ? "active" : ""} onClick={() => {setMenu("mens")}}><Link to='/mens'>Mens</Link></li>
            <li className={menu === "womens" ? "active" : ""} onClick={() => {setMenu("womens")}}><Link to='/womens'>Womens</Link></li>
            <li className={menu === "kids" ? "active" : ""} onClick={() => {setMenu("kids")}}><Link to='/kids'>Kids</Link></li>
          </ul>
          <div className="nav-login-cart">
            {
              token ? <Link to='/signup'><button onClick={() => logout()}>Logout</button></Link> : <Link to='/signup'><button>Login</button></Link>
            }
            
            <Link to='/cart'><img src={cart_icon} alt="cart_icon"/></Link>
            <div className="nav-cart-count">{getTotalCartItems()}</div>
          </div>
    </div>
  );
}

export default Navbar;
