import React from "react";
import { useNavigate } from "react-router-dom";

import NavBar from "../../Components/NavBar/NavBar";
import "./ItemNotFound.css";
<meta
  name="viewport"
  content="width=device-, initial-scale=1.0, user-scalable=no"
/>;

function Account() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Go to the previous page
  };

  const handleAddProduct = () => {
    navigate("/add-product"); // Change this to your actual "add product" route
  };

  return (
    <div>
      <div className="not-found-wrapper">
        <img src="images/DogNotFound.svg" className="pet-image-dog" />
        <p className="message1">
          Oops! We couldn't find what you're looking for.
        </p>
        <p className="message2">
          It looks like the product you’re searching for isn’t available. But
          don’t worry, we’re here to help! <br />
          Would you like to add the product info to our database?
        </p>

        <div className="button-group">
          <div>
            <button className="back-button" onClick={handleGoBack}>
              No, take me back
            </button>
          </div>
          <div>
            <button className="add-button" onClick={handleAddProduct}>
              Add product info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Account;
