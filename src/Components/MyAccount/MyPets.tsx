import React from "react";
import { useNavigate } from "react-router-dom";

import "./MyPets.css"
import NavBar from "../NavBar/NavBar";
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

            <div>
            <div className="text-2">Add new Pet? </div>
            <div className="text-3">What is your pet?</div>
                <div className="card1">
                    <h1>Dog</h1>
                    <img src="" alt="" />
                </div>
                <div className="card2">
                    <h1>Dog</h1>
                </div>
            </div>

            <NavBar/>
       </div>
    );

};

export default MyPets;
