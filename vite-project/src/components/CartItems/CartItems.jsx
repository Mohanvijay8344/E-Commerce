import React, { useContext, useState, useEffect } from "react";
import "./CartItems.css";
import { ShopContext } from "../Context/ShopContext";
import cart_cross_icon from "../assets/cart_cross_icon.png";
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function CartItems() {
  const navigate = useNavigate();

  const { all_product, cartItems, removeToCart, getCartTotalAmount, getTotalCartItems } =
    useContext(ShopContext);

  console.log(cartItems);
  const [getCartItems, setGetCartItems] = useState(getTotalCartItems)
  const [amount, setAmount] = useState(getCartTotalAmount);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      console.log('Razorpay SDK loaded');
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handlePayment = async () => {
    try {
      const response = await axios.post('https://e-commerce-payment.vercel.app/api/payment', { amount });
      console.log('Server Response:', response.data);
      const { data } = response;
      const options = {
        key: "rzp_test_HGQfoLoxZOItSY",
        amount: data.amount,
        currency: data.currency,
        order_id: data.id,
        name: 'E-Commerce',
        description: 'Test Payment',
        image: 'path/to/your/logo.png',
        handler: function (response) {
          console.log(response);
          alert('Payment successful!');
          navigate("/")
          setGetCartItems(0)
        },
      };
      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error('Error processing payment:', error);
      console.log('Full Axios error:', error.response); // Log the full Axios error object
    }
  }
  
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
        if (cartItems[e.id] > 0) {
          return (
            <div>
              <div className="cartitems-format cartitems-format-main">
                <img src={e.image} className="carticon-product-icon" alt="" />
                <p>{e.name}</p>
                <p>₹ {e.new_price}</p>
                <button className="cartitems-quantity">
                  {cartItems[e.id]}
                </button>
                <p>₹ {e.new_price * cartItems[e.id]}</p>
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
            </div>
          );
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
            <button onClick={handlePayment}>Proceed to Checkout</button>
        </div>
        <div className="cartitems-promocode">
          <p>If You Have a Prmocode, Enter it Here</p>
          <div className="cartitems-promobox">
            <input type="text" placeholder="promo code" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItems;
