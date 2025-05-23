import React, { useState } from "react";
import "./MyHistory.css";
import NavBar from "../../Components/NavBar/NavBar";

const MyHistory = () => {
  const [productName, setProductName] = useState("");
  const [backgroundImage, setBackgroundImage] = useState(null);
  const [ingredientsImage, setIngredientsImage] = useState(null);

  return (
    <div className="history-wrapper">
      <div className="page-content">
        <div className="page-header">
          My History
        </div>
        <div className="page-body">
          <div className="history-item">
            <img className="history-product-image" src={"https://picsum.photos/60"} alt="Logo" />
            
            <div className="history-info">
              <p className="history-info-product-name">Piatos Cheese flavoured potato chips</p>
              <p className="history-info-product-manufacturer">Jack 'n Jill</p>
              <p className="history-info-num-grams">85g</p>
            </div>

          </div>
          <div className="history-item">
            <img className="history-product-image" src={"https://picsum.photos/60"} alt="Logo" />
            
            <div className="history-info">
              <p className="history-info-product-name">Piatos Cheese flavoured potato chips</p>
              <p className="history-info-product-manufacturer">Jack 'n Jill</p>
              <p className="history-info-num-grams">85g</p>
            </div>

          </div>
          <div className="history-item">
            <img className="history-product-image" src={"https://picsum.photos/60"} alt="Logo" />
            
            <div className="history-info">
              <p className="history-info-product-name">Piatos Cheese flavoured potato chips</p>
              <p className="history-info-product-manufacturer">Jack 'n Jill</p>
              <p className="history-info-num-grams">85g</p>
            </div>

          </div>
          <div className="history-item">
            <img className="history-product-image" src={"https://picsum.photos/60"} alt="Logo" />
            
            <div className="history-info">
              <p className="history-info-product-name">Piatos Cheese flavoured potato chips</p>
              <p className="history-info-product-manufacturer">Jack 'n Jill</p>
              <p className="history-info-num-grams">85g</p>
            </div>

          </div>
          <div className="history-item">
            <img className="history-product-image" src={"https://picsum.photos/60"} alt="Logo" />
            
            <div className="history-info">
              <p className="history-info-product-name">Piatos Cheese flavoured potato chips</p>
              <p className="history-info-product-manufacturer">Jack 'n Jill</p>
              <p className="history-info-num-grams">85g</p>
            </div>

          </div>
          
        </div>
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
