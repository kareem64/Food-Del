/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../context/StoreContextProvider'
import FoodItem from '../foodItem/FoodItem'
import axios from 'axios'
const FoodDisplay = (props) => {
  const {food_list}= useContext(StoreContext)
    // console.log(props.category)

// useEffect(()=>{
// axios.get("http://localhost:4000/list")
// .then((res)=>setFoodList(res.data.data))
// },[])

  return (
    <div className="food-display">
      <h2>Food dishes near you</h2>
      <div className="food-list">
        {food_list.map((item, index) => {
          if(props.category === "all" || props.category===item.category){
            
            return (
            <FoodItem
              key={index}
              id={item._id}
              name={item.name}
              image={item.image}
              price={item.price}
              description={item.description}
              category={item.category}
            />
          );
          }
          
        })}
      </div>
    </div>
  );
}

export default FoodDisplay
