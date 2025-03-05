import React, { useState } from 'react'
import "./LoginSignup.css";

const LoginSignup = () => {
    const[action,setAction] = useState("Sign Up");

  return (
    <div className='container'>
        <img src="/images/logo.svg" className="logo-image"/>
        <div className="header">
            <div className="text">{action}</div>
        </div>
        <div className="inputs">
            {action==="Login"?<div></div>: <div className="input">
            <input type="email" placeholder="Email" />
        </div>}

        <div className="input">
            <input type="text" placeholder="Username" />
        </div>
        <div className="input">
            <input type="password" placeholder="Password" />
        </div>
        </div>
        
        <div className="submit-container">
    <div className={action === "Login" ? "submit gray" : "submit"} onClick={() => { setAction("Sign Up") }}>Sign Up</div>

    {/* Hide Login button on the Sign Up page */}
    {action !== "Sign Up" && (
        <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={() => { setAction("Login") }}>Login</div>
    )}
    
    {action === "Login" ? <div></div> : (
        <div className="already-have-account">
            Already have an account? <span onClick={() => setAction("Login")}>Log in</span>
        </div>
    )}
</div>

    </div> 
  );
};

export default LoginSignup;
