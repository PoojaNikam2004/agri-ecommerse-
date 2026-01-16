
import React from "react";
import "./Register.css";

const Register = () => {
  return (
    <form classNameName="Register-form">

  
    <div style={{ padding: "100px", backgroundColor:"rgba(137, 255, 34, 0.48)", borderRadius:"10px", maxWidth:"400px", margin:"auto", marginTop:"50px" }}>
      <h1>Create Account</h1>
      <input type="text" placeholder="Name" /><br /><br />
      <input type="email" placeholder="Email" /><br /><br />
      <input type="password" placeholder="Password" /><br /><br />
      <button>Register</button>
    </div>
    </form>
  );
};

export default Register;
