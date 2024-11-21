import { useState } from "react";
import logo from "../assets/images/logo.jpeg";
import { FaCartArrowDown, FaCar, FaBars } from "react-icons/fa";
import { SlLocationPin } from "react-icons/sl";
import "../assets/styles/Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="custom-header bg-light py-3 shadow-sm">
      <div className="container d-flex align-items-center justify-content-between">
        {/* Logo Section */}
        <div className="logo-container d-flex align-items-center">
          <img
            src={logo}
            alt="Season Auto Parts Logo"
            className="logo me-2"
            style={{ width: "50px", height: "50px" }}
          />
          <h1 className="brand-name h4 mb-0 me-3">SEASON AUTO PARTS</h1>
        </div>

        {/* Hamburger Menu */}
        <div className="hamburger d-lg-none" onClick={toggleMobileMenu}>
          <FaBars />
        </div>

        {/* Menu Links */}
        <nav
          className={`menu-links ${
            isMobileMenuOpen ? "open" : ""
          } d-lg-flex align-items-center`}
        >
          {/* Add a Vehicle button */}
          <button className="btn btn-outline-primary me-2 custom-button">
            Add Vehicle
            <FaCar className="ms-2" />
          </button>

          {/* Search Bar */}
          <div className="search-bar mx-3">
            <input
              type="text"
              className="form-control search-input"
              placeholder="Search..."
              aria-label="Search"
            />
          </div>

          {/* Auth Buttons */}
          <div className="auth-buttons d-flex">
            <Link to="/login"><button className="btn btn-outline-primary me-2 custom-button">
              Login
            </button></Link>
            <button className="btn btn-outline-primary me-2 custom-button">
              Choose a Store <SlLocationPin className="ms-1" />
            </button>
            <button className="btn btn-primary custom-button">
              Cart <FaCartArrowDown className="ms-1" />
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
