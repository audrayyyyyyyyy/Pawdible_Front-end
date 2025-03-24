import React from "react";
import { useNavigate } from "react-router-dom";

import "./LoginSignup.css"
import "./Login.css";

const Login = () => {
    const navigate = useNavigate();

    return (
        <div className="container">
            <img src="/images/g8.svg" className="logo-image"/>
            
            <div className="header">
                <div className="text1">Login</div>
            </div>
            <div className="inputs">
                <div className="input">
                    <input type="text" placeholder="Username" />
                </div>
                <div className="input">
                    <input type="password" placeholder="Password" />
                </div>
            </div>
            <div className="submit-container">
                <div className="submit">Login</div>
                <div className="already-have-account">
                 Don't have an account? <span onClick={() => navigate("/signup")}>Sign Up</span>
                </div>
            </div>
        </div>
    );
};

export default Login;
