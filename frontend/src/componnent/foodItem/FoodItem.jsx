/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext} from 'react'

import './FoodItem.css'
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContextProvider';
const FoodItem = (props) => {

  
    const {cartItems,addItemToCart,removeItemFromCart,url} = useContext(StoreContext)
  return (
    <div className="food-item">
      <div className="food-item-container">
        <div className="itemImage">
          <img className="item-image" src={`${url}/images/`+ props.image} alt="" />
          {!cartItems[props.id] ? (
            <p className='addcounter' onClick={() => addItemToCart(props.id)}>➕</p>
          ) : (
            <div className='counter'>
              <p className='remove-one' onClick={()=>removeItemFromCart(props.id)}>➖</p>
              <p className='count'>{cartItems[props.id]}</p>
              <p className='add-one' onClick={()=>addItemToCart(props.id)}>➕</p>
            </div>
          )}
        </div>
        <div className="food-item-info">
          <p className="title">{props.name}</p>
          <img src={assets.rating_starts} alt="rating" />
        </div>
        <p className="description">{props.description}</p>
        <p className="price">${props.price}</p>
      </div>
    </div>
  );
}

export default FoodItem
