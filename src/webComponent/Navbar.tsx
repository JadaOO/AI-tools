import { Link, NavLink } from "react-router-dom";
import "./Navbar.css"; // Import the CSS file for styling
import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="nav-buttons">
        <NavLink
          to="/chatbot"
          className={({ isActive }) =>
            isActive ? "nav-button active" : "nav-button"
          }
        >
          chatbot
        </NavLink>
        <NavLink
          to="/ocr"
          className={({ isActive }) =>
            isActive ? "nav-button active" : "nav-button"
          }
        >
          OCR
        </NavLink>
        <NavLink
          to="/services"
          className={({ isActive }) =>
            isActive ? "nav-button active" : "nav-button"
          }
        >
          Services
        </NavLink>
      </div>
      <NavLink to="/ask_chatgpt">
        <img
          src="../Assets/gpt-3.svg"
          alt="Ask Chatgpt"
          className="robot-icon"
        />
      </NavLink>
    </nav>
  );
};

export default Navbar;
