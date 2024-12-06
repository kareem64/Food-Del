/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../context/StoreContextProvider";
import { assets } from "../../assets/assets";
import { useNavigate } from "react-router-dom";
const Cart = () => {
  const navigate = useNavigate()
  const { cartItems, food_list, removeItemFromCart, getTotalPrice,url } =
    useContext(StoreContext);
    

  return (
    <div className="mycart">
      <h2>Cart Items :</h2>
      <div className="cart-container">
        <div className="cart-title">
          <p>Item</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quntity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>

        <div>
          {food_list.map((item, index) => {
            console.log(cartItems[item._id]);
            if (cartItems[item._id] > 0) {
              return (
               
                  <div className="cart-item" key={index}>
                    <img className="item-image" src={url+'/images/'+item.image} alt="" />
                    <p>{item.name}</p>
                    <p>${item.price}</p>
                    <p>{cartItems[item._id]}</p>
                    <p>${item.price * cartItems[item._id]}</p>
                    <img
                      onClick={() => removeItemFromCart(item._id)}
                      className="cross"
                      src={assets.cross_icon}
                      alt=""
                    />
                  </div>
                
              );
            }
          })}
        </div>
      </div>
      <div className="total">
        <div className="sub-total">
          <p>subTotal:</p>
          <p>${getTotalPrice()}</p>
        </div>

        <div className="delevery-fee">
          <p>Delevery Fee</p>
          <p>${getTotalPrice() === 0 ? 0 : 2}</p>
        </div>
        <div className="all-total">
          <h3>Total:</h3>
          <p>${getTotalPrice() === 0 ? 0 : getTotalPrice() + 2}</p>
        </div>
      </div>
      <button onClick={()=>navigate('/place-order')} >click to checkout</button>
    </div>
  );
};

export default Cart;
