import React, { useState } from "react";
import "./MyHistory.css";
import NavBar from "../../Components/NavBar/NavBar";

const MyHistory = () => {
  const [productName, setProductName] = useState("");
  const [backgroundImage, setBackgroundImage] = useState(null);
  const [ingredientsImage, setIngredientsImage] = useState(null);

  return (
    <div className="history-wrapper">
      <h1>My History</h1>
      <div className="container">
        <button className="submit-button">Submit</button>
      </div>
      <NavBar
        current="history"
        routes={{
          account: "/account",
          scan: "/scan",
          history: "/history",
        }}
      />
    </div>
  );
};

export default MyHistory;
