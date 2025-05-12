import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AuthRedirect.css';

interface AuthRedirectProps {
  redirectIfLoggedIn: string;
  redirectIfLoggedOut?: string;
}

const AuthRedirect: React.FC<AuthRedirectProps> = ({
  redirectIfLoggedIn,
  redirectIfLoggedOut = '/login',
}) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('token');
    
    // Optional delay to show spinner
    const timer = setTimeout(() => {
      if (isLoggedIn) {
        navigate(redirectIfLoggedIn);
      } else {
        navigate(redirectIfLoggedOut);
      }
    }, 1000);

    return () => clearTimeout(timer); // cleanup
  }, [navigate, redirectIfLoggedIn, redirectIfLoggedOut]);

  return (
    <div className="spinner-container">
      <div className="spinner" />
    </div>
  );
};

export default AuthRedirect;