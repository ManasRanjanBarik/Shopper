// CartItem.js
import React, { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import "./CartItem.css";
import remove_icon from "../Assets/cart_cross_icon.png";

const CartItem = () => {
  const { all_product,getTotalCartAmount, cartItems, removeFromCart, } = useContext(ShopContext);

  return (
    <div className="cartItems">
      <div className="cartItems-format-main">
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
            <div key={e.id}>
              <div className="cartItems-format cartItems-format-main">
                <img src={e.image} alt="" className="carticon-product-icon" />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className="cartItems-quantity">{cartItems[e.id]}</button>
                <p>${e.new_price * cartItems[e.id]}</p>
                <img 
                  src={remove_icon} 
                  alt="remove icon" 
                  onClick={() => removeFromCart(e.id)} 
                  className="cartItems-remove-icon"
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart Totals</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <h3>Total</h3>
              <h3>${getTotalCartAmount()}</h3>
            </div>
            <button>Proceed to checkout</button>
          </div>
        </div>
          <div className="cartitems-promocode">
            <p>If you have promo code, Enter here</p>
            <div className="cartitems-promobox">
              <input type="text"  placeholder="Enter promo codes"/>
              <button>Submit</button>
            </div>
          </div>
      </div>
    </div>
  );
};

export default CartItem;
