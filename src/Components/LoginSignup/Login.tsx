import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./LoginSignup.css"
import "./Login.css";
import axios from "axios";

const api = axios.create({
    baseURL: 'http://127.0.0.1:8000/',
    headers: {"Content-Type": "application/json"},

});


const Login = () => {
    const navigate = useNavigate();


    const [username,setUsername] = useState<string>("");
    const [password,setPassword] = useState<string>("");


    const SubmitLoginToServer = async (event) => {
        event.preventDefault();

        try {
            console.log("username: " + username + "password: " + password);
            const response = await api.post("login/",
                {
                    "username": username,
                    "password": password
                }
            )

            alert("Login Successful");
            navigate('NewPage');
        
        }
        catch (error){
            console.error("Login failed:",error.response ? error.response.data : error.message);
            alert("Login failed! Check your credentials and try again.")
        }
    }


    return (
        <div className="container">
            <img src="/images/g8.svg" className="logo-image"/>
            
            <form onSubmit={SubmitLoginToServer}>

                <div className="header">
                    <div className="text1">Login</div>
                </div>
                <div className="inputs">
                    <div className="input">
                        <input onChange={(e) => setUsername(e.target.value)} type="text" placeholder="Username" />
                    </div>
                    <div className="input">
                        <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
                    </div>
                </div>
                <div className="submit-container">
                    {/* <div className="submit">Login</div> */}
                    <button className="submit">Login</button>
                    <div className="already-have-account">
                    Don't have an account? <span onClick={() => navigate("/signup")}>Sign Up</span>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Login;
