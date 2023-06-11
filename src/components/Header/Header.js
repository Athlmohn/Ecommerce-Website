import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
function Header() {
  return (
    <header className="header">
      <Link to="/" className="home-link">
        <h1>Goshopz</h1>
      </Link>
      <Link to="/logout">
        <button className="header-btn">LogIn</button>
      </Link>
    </header>
  );
}

export default Header;
