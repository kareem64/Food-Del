/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import "./PlaceOrder.css";
import { StoreContext } from "../../context/StoreContextProvider";
import axios from "axios";
const PlaceOrder = () => {
  const { getTotalPrice, food_list, cartItems, token,url } =
    useContext(StoreContext);
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    city: "",
    state: "",
    street: "",
    zipcode: "",
    country: "",
    phonenumber: "",
  });
  const onChangeHandel = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const placeOrder = async (e) => {
    e.preventDefault();
    
    let responce = await axios.post(url+'/payment')
    if(responce){
      console.log(responce)
    }
    // let orderItems = [];
//     food_list.map((item) => {
//       if (cartItems[item._id] > 0) {
//         const orderInfo = item;
//         orderInfo["quantity"] = cartItems[item._id];
//         orderItems.push(orderInfo);
//       }
//     });
//     let orderData = {
//       address: data,
//       items:orderItems,
//       amount:getTotalPrice()+2
//     };
//     let responce = await axios.post(url+'/payment',orderData,{headers:{token}})
//     if(responce.data.success){
// const {session_url}=responce.data
// window.location.replace(session_url)
//     }else{
//       alert("Error")
//     }
//     console.log(orderItems);
  };
  return (
    <div className="order">
      <form onSubmit={placeOrder} action="">
        <div className="order-left">
          <p>Delevery information</p>
          <div className="multi-input">
            <input
              type="text"
              name="firstname"
              placeholder="First Name"
              value={data.firstname}
              onChange={onChangeHandel}
              required
            />
            <input
              type="text"
              name="lastname"
              placeholder="Last Name"
              value={data.lastname}
              onChange={onChangeHandel}
              required
            />
          </div>
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            value={data.email}
            onChange={onChangeHandel}
            required
          />
          <div className="multi-input">
            <input
              type="text"
              name="city"
              placeholder="City"
              value={data.city}
              onChange={onChangeHandel}
              required
            />
            <input
              type="text"
              name="state"
              placeholder="State"
              value={data.state}
              onChange={onChangeHandel}
              required
            />
          </div>
          <input
            type="text"
            name="street"
            placeholder="Street"
            value={data.street}
            onChange={onChangeHandel}
            required
          />
          <div className="multi-input">
            <input
              type="text"
              name="zipcode"
              placeholder="Zip Code"
              value={data.zipcode}
              onChange={onChangeHandel}
              required
            />
            <input
              type="text"
              name="country"
              placeholder="Country"
              value={data.country}
              onChange={onChangeHandel}
              required
            />
          </div>
          <input
            type="text"
            name="phonenumber"
            placeholder="Phone N:"
            value={data.phonenumber}
            onChange={onChangeHandel}
            required
          />
        </div>
        <div className="order-right">
          <div className="total">
            <h3>cart Totals:</h3>
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
          <button type="submit">click to payment</button>
        </div>
      </form>
    </div>
  );
};

export default PlaceOrder;
