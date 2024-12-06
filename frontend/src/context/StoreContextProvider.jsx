/* eslint-disable no-const-assign */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import axios from "axios";
export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const  url = "http://localhost:4000"
  const [food_list,setFoodList]= useState([])
  const [cartItems,setCartItems] = useState({})
  const [username,setUsername]= useState("testname")
  const [token,setToken]=useState("")
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    cartData:null
  });
  // food-List
  const fetch_foodList=async ()=>{
    const responce = await axios.get(`${url}/list`)
    setFoodList(responce.data.data)
  }
  //get cart data 
  const loadCartData = async (token)=>{
const responce = await axios.post(url+'/getcart',{},{headers:{token}})
setCartItems(responce.data.cartData)
  }
  const loadUserName = async (token)=>{
    const responce = await axios.post(url+'/getcart',{},{headers:{token}})
    setUsername(responce.data.name)
  }
  useEffect(()=>{
    async function LoadData(){
      if(localStorage.getItem("token")){
        setToken(localStorage.getItem("token"));
       await loadCartData(localStorage.getItem("token"));
       await loadUserName(localStorage.getItem("token"));
      }
      await fetch_foodList();
    }
 LoadData()
  },[])

 
const addItemToCart= async (itemId)=>{
  if(!cartItems[itemId]){
    setCartItems((prev)=>({...prev,[itemId]:1}))
  }else{

    setCartItems((prev)=>({...prev,[itemId]:prev[itemId] + 1}))
  }
  if(token){
    await axios.post(url+'/addcart',{itemId},{headers:{token}})
  }
}


//   const addItemToCart = (itemId)=>{
// if(!cartItems[itemId]){
// setCartItems((prev)=>({...prev,[itemId]:1}))
// }else{
//   setCartItems((prev) => ({ ...prev, [itemId]:prev[itemId] + 1 }));
// }
//   }
 const removeItemFromCart = async(itemId) => {
   
     setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
   if (token) {
     await axios.post(url + "/removecart", { itemId }, { headers: { token } });
   }
 }; 
 //total price
 const getTotalPrice = () => {
   let totalPrice = 0;
   for (const item in cartItems) {
     if (cartItems[item] > 0) {
       const cartItem = food_list.find((product) => product._id === item);
       totalPrice += cartItem.price * cartItems[item];  
     }
     
   }
   return totalPrice;
 };
 const getTotalItems=  ()=>{
  let totalItems = 0;
  for (const item in cartItems) {
    if (cartItems[item]>0) {
      totalItems += cartItems[item]
    }
  }
  
  return totalItems
 }
  const contextvalue = {
    food_list,
    setFoodList,
    cartItems,
    setCartItems,
    addItemToCart,
    removeItemFromCart,
    getTotalPrice,
    getTotalItems,
    url,
    token,
    setToken,
    values,
    setValues,
    username
  };
  console.log(cartItems)
  return (
    <StoreContext.Provider value={contextvalue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
