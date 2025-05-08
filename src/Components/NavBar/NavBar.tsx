import React from "react";
import { useNavigate } from "react-router-dom";

import "./Navbar.css"
const NavBar= () => {
    

    return (
        


        <div className="bottom-nav">
        <div className="nav-item active">
          <div className="nav-icon account"></div>
          <img src="/images/account.svg" className="account-image"/>
          <div className="nav-label">Account</div>
        </div>
        <div className="nav-item">
          <div className="nav-icon scan"></div>
          <img src="/images/scan.svg" className="scan-image"/>
          <div className="nav-label">Scan</div>
        </div>
        <div className="nav-item">
          <div className="nav-icon history"></div>
          <img src="/images/history.svg" className="history-image"/>
          <div className="nav-label">History</div>
        </div>
      </div>
       
    );

};

export default NavBar;
