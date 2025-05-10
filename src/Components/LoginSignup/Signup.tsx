import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import"./LoginSignup.css"
import "./Signup.css";
import axios from "axios";

const api = axios.create({
    baseURL: 'http://127.0.0.1:8000/',
    headers: {"Content-Type": "application/json"},
});

const Signup = () => {
    const navigate = useNavigate();

    const [email,setEmail] = useState<string>("");
    const [username,setUsername] = useState<string>("");
    const [password,setPassword] = useState<string>("");

    const SubmitSignupToServer = async (event) => {
        event.preventDefault();

        try{
            const response = await api.post("signup/",
                {
                    "email": email,
                    "username": username,
                    "password": password,
                }
            )
            alert("Signup Successful");
            navigate('Login');
        
        }
        catch (error){
            console.error("Signup failed:", error.response ? error.response.data : error.message);
            alert("Signup failed! Check your credentials and try again.")     
        }
    }

    return (
            <div  className="container">
                <img src="/images/g8.svg" className="logo-image"/>

                <form onSubmit={SubmitSignupToServer}>

                <div className="header">
                    <div className="text1">Sign Up</div>
                </div>
                <div className="inputs">
                    <div className="input">
                        <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email"/>
                    </div>
                    <div className="input">
                        <input onChange={(e) => setUsername(e.target.value)} type="text" placeholder="Username" />
                    </div>
                    <div className="input">
                        <input onChange={(e) => setPassword(e.target.value)}type="password" placeholder="Password" />
                    </div>
                </div>
                <div className="submit-container">
                    <button  className="submit">Sign Up</button>
                    <div className="already-have-account">
                        Already have an account? <span onClick={() => navigate("/login")}>Log in</span>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Signup;
