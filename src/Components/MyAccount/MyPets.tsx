import React from "react";
import { useNavigate } from "react-router-dom";

import "./MyPets.css"
const MyPets= () => {
    

    return (
        <div>
            <div className="MyPetsContainer">
                <div className="text-1">My Pets </div>
                <div className="wrapper">
                    <div className="item">b0x1</div>
                    <div className="item">b0x2</div>
                    <div className="item">b0x3</div>
                    <div className="item">b0x4</div>
                    <div className="item">b0x4</div>
                    
                </div>

            </div>
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
       </div>
    );

};

export default MyPets;
