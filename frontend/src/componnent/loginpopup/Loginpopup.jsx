/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react'
import { assets } from '../../assets/assets'
import './Loginpopup.css'
import axios from 'axios'
import { StoreContext } from '../../context/StoreContextProvider'

const Loginpopup = ({setshowLogin}) => {
  
     const {url,values,setValues,setToken} = useContext(StoreContext)
    const[currState,setCurrState]=useState("SignUp")
    
    //setvalues
    const onChangeHandel=(e)=>{
      setValues({...values,[e.target.name]:e.target.value})
      
    }
    const SignupLogin= async(e)=>{
      e.preventDefault()
      let newUrl = url;
      if(currState === "SignUp"){
        newUrl += "/register"
      }else{
        newUrl += "/login"
      }
      const responce =  await axios.post(newUrl, values)
       if(responce.data.success){
        setToken(responce.data.token)
        localStorage.setItem("token", responce.data.token);
        setshowLogin(false)
       }else{
        alert(responce.data.message)
       }
    }
    
    

  return (
    <div className="login-popup">
      <form action="" className="login-popup-container">
        <div className="title">
          <h2>{currState}</h2>
          <img
            onClick={() => setshowLogin(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="login-popup-inputs">
            {currState === "SignUp"?<input type="text" name='name' placeholder="Your Name" required onChange={onChangeHandel}/>:<></>}
          
          <input type="email" name='email' placeholder="Your Email" required onChange={onChangeHandel}/>
          <input type="password" name='password' placeholder="PassWord" required onChange={onChangeHandel}/>
        </div>
        <button onClick={SignupLogin}>{currState==="SignUp"?"create account":"login"}</button>
        <div className="login-popup-condition">
            <input type="checkbox" required/>
            <p>By continue You agree to the terms of use &privacy policy.</p>
        </div>
        {currState==="Login"? <p className='new-account'>create anew account?<span onClick={()=>setCurrState("SignUp")}>click here</span></p>: <p className='alredy-account'>already have an acount?<span onClick={()=>setCurrState("Login")}>login here</span></p>}
       
       
        <p></p>
      </form>
    </div>
  );
}

export default Loginpopup
