import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import NavBar from "../../Components/NavBar/NavBar";
import "./Account.css";

function Account() {
  const navigate = useNavigate();

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

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login"); // 👈 redirect to login page or your landing page
  };

  const handleOnMyPets = () => {
    navigate("/MyPets");
  };

  return (
    <div className="container">
      <div className="account-wrapper">
        <div className="header">
          <h1 className="my-account">My Account</h1>
        </div>

        <div className="account-content">
          <div className="account-avatar"></div>
          <div className="account-name">{username}</div>

          <div className="account-choices">
            {/* <div className="change-avatar">Change Avatar &emsp;&emsp;&emsp;
                            <span className="arrow"> › </span>
                        </div>
                        <div className="change-password">Change Password &emsp;&emsp;&emsp;
                            <span className="arrow"> › </span>
                        </div> */}
            <div
              className="my-pets space-between"
              onClick={handleOnMyPets}
              style={{ cursor: "pointer" }}
            >
              My Pets
              <span className="arrow"> › </span>
            </div>
            <div
              className="Logout space-between"
              onClick={handleLogout}
              style={{ cursor: "pointer" }}
            >
              Logout
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
