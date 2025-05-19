import React from 'react';
import './Spinner.css'; // Same CSS used in AuthRedirect

const Spinner: React.FC = () => {
  return (
    <div className="spinner-container">
      <div className="spinner" />
    </div>
  );
};

export default Spinner;
