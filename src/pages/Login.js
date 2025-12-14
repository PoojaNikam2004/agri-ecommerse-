
import React from 'react';
import './Login.css';


export default function Login() {
return (
<div className="login-container">
<div className="login-box">
<h2>Welcome Back to AgriMart</h2>
<p className="subtitle">Login and continue shopping for agriculture products</p>


<form>
<input type="text" placeholder="Full Name" required />
<input type="email" placeholder="Email Address" required />
<input type="tel" placeholder="Mobile Number" required />
<input type="password" placeholder="Password" required />


<button type="submit" className="login-btn">Login</button>


<p className="extra-text">Don't have an account? <a href="/register">Register here</a></p>
</form>
</div>
</div>
);
}
