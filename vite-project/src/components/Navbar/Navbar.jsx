import React, { useContext, useState } from "react";
import "./Navbar.css";
import logo from "../assets/logo.png"
import cart_icon from "../assets/cart_icon.png";
import { Link } from "react-router-dom";
import ShopCategory from "../Pages/ShopCategory";
import { ShopContext } from "../Context/ShopContext";

function Navbar() {

    const [menu, setMenu] = useState("shop")

    const { getTotalCartItems, totalCatrtItem } = useContext(ShopContext);

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="logo" />
        <p>E-Commerce</p>
      </div>
          <ul className="nav-menu">
            <li onClick={() => {setMenu("shop")}}><Link style={{textDecoration: "none"}} to='/'>Shop</Link>{menu === "shop" ? <hr /> : <></>} </li>
            <li onClick={() => {setMenu("mens")}}><Link style={{textDecoration: "none"}} to='/mens'>Mens</Link> {menu === "mens" ? <hr /> : <></>}</li>
            <li onClick={() => {setMenu("womens")}}><Link style={{textDecoration: "none"}} to='/womens'>Womens</Link> {menu === "womens" ? <hr /> : <></>}</li>
            <li onClick={() => {setMenu("kids")}}><Link style={{textDecoration: "none"}} to='/kids'>Kids</Link> {menu === "kids" ? <hr /> : <></>}</li>
          </ul>
          <div className="nav-login-cart">
            <Link to='/signup'><button>Login</button></Link>
            <Link to='/cart'><img src={cart_icon} alt="cart_icon" /></Link>
            <div className="nav-cart-count">{getTotalCartItems()}</div>
          </div>
    </div>
  );
}
export default Navbar;
