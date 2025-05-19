import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


import NavBar from "../../Components/NavBar/NavBar";
import "./Account.css";

function Account() {
    const userString = localStorage.getItem("user");
    let username = "";

    if (userString) {
        try {
            const user = JSON.parse(userString);
            username = user.username || "";
        } catch (e) {
            console.error("Invalid JSON in localStorage user:", e);
        }
    }


    return (
        <div>
            <div className="account-wrapper"> 
                <div className="header">
                    <h1 className="my-account">My Account</h1>
                </div>
            
                <div className="account-content">
                    <div className="account-avatar"></div>
                    <div className="account-name">{username}</div>

                        <div className="account-choices">
                            <div className="change-avatar">Change Avatar &emsp;&emsp;&emsp;
                                <span className="arrow"> › </span>
                            </div>
                            <div className="change-password">Change Password &emsp;&emsp;&emsp;
                                <span className="arrow"> › </span>
                            </div>
                            <div className="my-pets">My Pets &emsp;&emsp;&emsp;
                                <span className="arrow"> › </span>
                            </div>
                            <div className="Logout">Logout &emsp;&emsp;&emsp;
                                <span className="arrow"> › </span>
                            </div>
                        </div>


                    </div>
                </div>
                
            <NavBar
                current="account"
                routes={{
                    account: "/account",
                    scan: "/scan",
                    history: "/history",
                }}
            />
         </div>
                  
                    
    );
}

export default Account;
