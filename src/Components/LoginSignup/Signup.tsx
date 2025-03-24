import React from "react";
import { useNavigate } from "react-router-dom";

import"./LoginSignup.css"
import "./Signup.css";

const Signup = () => {
    const navigate = useNavigate();

    return (
        <div  className="container">
            <img src="/images/g8.svg" className="logo-image"/>

            <div className="header">
                <div className="text1">Sign Up</div>
            </div>
            <div className="inputs">
                <div className="input">
                    <input type="email" placeholder="Email" />
                </div>
                <div className="input">
                    <input type="text" placeholder="Username" />
                </div>
                <div className="input">
                    <input type="password" placeholder="Password" />
                </div>
            </div>
            <div className="submit-container">
                <div className="submit">Sign Up</div>
                <div className="already-have-account">
                    Already have an account? <span onClick={() => navigate("/login")}>Log in</span>
                </div>
            </div>
        </div>
    );
};

export default Signup;
