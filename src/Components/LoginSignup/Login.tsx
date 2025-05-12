import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { backendServerIP } from "../../globals";

import "./LoginSignup.css"
import "./Login.css";
import axios from "axios";

const api = axios.create({
    baseURL: backendServerIP,
    headers: {"Content-Type": "application/json"},

});


const Login = () => {
    const navigate = useNavigate();


    const [username,setUsername] = useState<string>("");
    const [password,setPassword] = useState<string>("");
    const [loading, setLoading] = useState(false);

    const SubmitLoginToServer = async (event) => {
        event.preventDefault();

        // Disable the button while sending data to prevent the user
        // from sending multiple requests in one click
        setLoading(true);

        try {
            // console.log("username: " + username + "password: " + password);
            
            const response = await api.post("login/",
                {
                    "username": username,
                    "password": password
                }
            )

            const token = response.data.token;
            const user = response.data.user;

            localStorage.setItem("token", token);
            localStorage.setItem("user", JSON.stringify(user));

            alert("Login Successful");
            navigate('/');
        
        }
        // catch (error){
        //     console.error("Login failed:", error.response ? error.response.data : error.message);
        //     alert("Login failed! Check your credentials and try again.")
        // }

        catch (error: unknown) {
            if (axios.isAxiosError(error)) {
                console.error("Login failed:", error.response?.data || error.message);
            } else {
                console.error("Unexpected error:", error);
            }
            alert("Login failed! Check your credentials and try again.");
        } finally {
            setLoading(false);
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
