import React from "react";
import { useNavigate } from "react-router-dom";

import "./Navbar.css";

interface NavBarProps {
  current: "account" | "scan" | "history";
  routes: {
    account: string;
    scan: string;
    history: string;
  };
}

const NavBar: React.FC<NavBarProps> = ({ current, routes }) => {
  const navigate = useNavigate();

  const navItems: {
    key: "account" | "scan" | "history";
    label: string;
    icon: string;
  }[] = [
    { key: "account", label: "Account", icon: "/images/account.svg" },
    { key: "scan", label: "Scan", icon: "/images/scan.svg" },
    { key: "history", label: "History", icon: "/images/history.svg" },
  ];

  return (
    <div className="bottom-nav">
      {navItems.map((item) => (
        <div
          key={item.key}
          className={`nav-item ${current === item.key ? "active" : ""}`}
          onClick={() => navigate(routes[item.key])}
        >
          <div className={`nav-icon ${item.key}`}></div>
          <img
            src={item.icon}
            className={`${item.key}-image icon ${current === item.key ? "active" : ""}`}
            alt={`${item.label} icon`}
          />
          <p className="nav-label">{item.label}</p>
        </div>
      ))}
    </div>
  );
};

export default NavBar;
