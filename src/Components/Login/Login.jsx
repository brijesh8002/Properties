import React from "react";
import "./Login.css";
// import { CiLogin } from "react-icons/ci";
import { MdOutlineLogout } from "react-icons/md";

const Login = () => {
  return (
    <div id="login" onSubmit={(e)=>{
        alert("Login Successfully.....")
    }}>
      <form action="">
        <span id="title">Login</span>
        <div className="list1">
          <label htmlFor="email">Email</label>
          <input type="email" required id="email"/>
        </div>
        <div className="list1">
          <label htmlFor="pass">Password</label>
          <input type="password" required id="pass" />
        </div>
        <button className="loginbtn">Login <MdOutlineLogout /></button>
      </form>
    </div>
  );
};

export default Login;
