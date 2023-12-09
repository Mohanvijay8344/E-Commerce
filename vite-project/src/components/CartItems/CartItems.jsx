import React, { useContext } from "react";
import "./CartItems.css";
import { ShopContext } from "../Context/ShopContext";
import cart_cross_icon from "../assets/cart_cross_icon.png";

function CartItems() {
  const { all_product, cartItems, removeToCart, getCartTotalAmount } = useContext(ShopContext);
  
  console.log(cartItems);
  return (
    <div className="cartItems">
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e) => {
        if(cartItems[e.id] > 0) {
            return <div>
            <div className="cartitems-format cartitems-format-main">
              <img src={e.image} className="carticon-product-icon" alt="" />
              <p>{e.name}</p>
              <p>₹ {e.new_price}</p>
              <button className="cartitems-quantity">{cartItems[e.id]}</button>
              <p>₹ {e.new_price*cartItems[e.id]}</p>
              <img
                className="cartitem-remove-icon"
                src={cart_cross_icon}
                onClick={() => {
                  removeToCart(e.id);
                }}
                alt=""
              />
              
            </div>
            <hr />
          </div>;
        }
      })}
      <div className="cartitems-down">
        <div className="cartitem-total">
            <h1>Cart Total</h1>
            <div>
                <div className="cartitems-total-item">
                    <p>Subtotal</p>
                    <p>₹ {getCartTotalAmount()}</p>
                </div>
                <hr />
                <div className="cartitems-total-item">
                    <p>Shipping Free</p>
                    <p>Free</p>
                </div> 
                <hr />
                <div className="cartitems-total-item">
                    <h3>Total</h3>
                    <h3>₹ {getCartTotalAmount()}</h3>
                </div>
            </div>
            <button>Proceed to Checkout</button>
        </div>
        <div className="cartitems-promocode">
            <p>If You Have a Prmocode, Enter it Here</p>
            <div className="cartitems-promobox">
                <input type="text" placeholder="promo code"/>
                <button>Submit</button>
            </div>
        </div>
      </div>
    </div>
  );
}

export default CartItems;
