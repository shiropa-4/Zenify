import React from 'react';
import { Link } from "react-router-dom";
import '../styles/Navbar.css';

function Navbar() {
  return (
    <nav>
      

     <div className="auth-links">
        <a href="/Login" className="login-btn">Login</a>
        <a href="/Register" className="register-btn">Register</a>
        
      </div>
    </nav>
  );
}

export default Navbar;
