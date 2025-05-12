import React from 'react'
import "./Signup.css"
import { MdOutlineLogin } from "react-icons/md";

const Signup = () => {
  return (
    <div id="Signup" onSubmit={(e)=>{
        alert("Signup Successfully.....")
    }}>
      <form action="">
        <span id="title">SignUp</span>
        <div className="list">
          <label htmlFor="name">User Name</label>
          <input type="text" required id="name"/>
        </div>
        <div className="list">
          <label htmlFor="email">Email</label>
          <input type="email" required id="email"/>
        </div>
        
        <div className="list">
          <label htmlFor="pass">Password</label>
          <input type="password" required id="pass" />
        </div>
        <div className="list">
          <label htmlFor="conpass">Confirm Password</label>
          <input type="password" required id="conpass" />
        </div>
        <button className="loginbtn2">SignUp<MdOutlineLogin /></button>
      </form>
    </div>
  )
}

export default Signup