import React, { createContext, useState } from 'react';
import all_product from "../assets/all_product.js";


export const ShopContext = createContext(null)

const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < all_product.length+1; index++) {
        cart[index] = 0; 
    }
    return cart
}

const ShopContextProvider = (props) => {
    

    const [cartItems, setCartitems] = useState(getDefaultCart())
    const [totalCatrtItem, setTotalCartItem] = useState(0)
    
    const addToCart = (itemId) => {
        setCartitems((prev) => ({...prev,[itemId]:prev[itemId]+1}))
        console.log(cartItems);
    }

    const removeToCart = (itemId) => {
        setCartitems((prev) => ({...prev,[itemId]:prev[itemId]-1}))
    }


    // const getCartTotalAmount = () => {
    //     let totalAmount = 0;
    //     for(const item in cartItems){
    //         if(cartItems[item]>0){
    //             let itemInfo = all_product.find((product) => product.id === Number(item))
    //             totalAmount += itemInfo.new_price * cartItems[item];
    //         }
    //         return totalAmount;
    //     }
    //     console.log(totalAmount);
    // }
    const getCartTotalAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = all_product.find((product) => product.id === Number(item))
                totalAmount += itemInfo.new_price * cartItems[item];
            }
        }
        console.log(totalAmount);
        return totalAmount; // Move the return statement outside the loop
    }
    
    const getTotalCartItems = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                totalAmount += 1;
            }
        }
        return totalAmount;
    }
    

    const contextValue = {all_product, cartItems, addToCart, removeToCart, getCartTotalAmount, getTotalCartItems, totalCatrtItem}

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;