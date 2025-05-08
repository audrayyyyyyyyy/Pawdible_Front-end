import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


import NavBar from "../../Components/NavBar/NavBar";
import "./Account.css";

function Account() {
    return (
        <div>
            <div className="account-wrapper"> 
                <div className="header">
                <div className="my-account">My Account</div>
                </div>
            
                <div className="account-content">
                    <div className="account-avatar"></div>
                    <div className="account-name">Audray Mae B. Valdez</div>

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
                
            <NavBar />
         </div>
                  
                    
    );
}

export default Account;
