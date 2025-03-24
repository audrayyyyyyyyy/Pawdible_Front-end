import React from "react";
import { useNavigate } from "react-router-dom";

import "./Navbar.css"
const NavBar= () => {
    

    return (


            <div className="nav-bar">
                <div className="account">
                    <img src="/images/account.svg" className="account-image"/>
                    <div className="text">Account</div> 
                </div>

                <div className="scan">
                    <img src="/images/scan.svg" className="scan-image"/>
                    <div className="text">Scan</div>
                </div>

                <div className="history">
                    <img src="/images/history.svg" className="history-image"/>
                    <div className="text">History</div>
                </div>
            </div>
       
    );

};

export default NavBar;
