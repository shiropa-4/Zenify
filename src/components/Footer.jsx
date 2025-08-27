import { NavLink } from "react-router-dom";
import { FaHome, FaStar, FaExclamationTriangle, FaUser } from "react-icons/fa"; 
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <NavLink 
        to="/" 
        className={({ isActive }) => "footer-link" + (isActive ? " active" : "")}
      >
        <FaHome size={24} />
        
      </NavLink>

      <NavLink 
        to="/favourites" 
        className={({ isActive }) => "footer-link" + (isActive ? " active" : "")}
      >
        <FaStar size={24} />
      
      </NavLink>

      <NavLink 
        to="/emergency" 
        className={({ isActive }) => "footer-link emergency" + (isActive ? " active" : "")}
      >
        <FaExclamationTriangle size={24} />
  
      </NavLink>

      <NavLink 
        to="/profile" 
        className={({ isActive }) => "footer-link" + (isActive ? " active" : "")}
      >
        <FaUser size={24} />
       
      </NavLink>
    </footer>
  );
}

export default Footer;
