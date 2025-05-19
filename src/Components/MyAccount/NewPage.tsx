import React, { useState } from 'react';
import axios from 'axios';
import NavBar from '../NavBar/NavBar';

const NewPage = () => {
 
  return (
    <div>
        <NavBar
            current="scan"
            routes={{
                account: "/account",
                scan: "/scan",
                history: "/history",
            }}
        />
    </div>
  );
};

export default NewPage;