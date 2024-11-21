import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../assets/styles/Navbar.css";
import tabData from "../common/tabData";

const Navbar = () => {
  const [activeTab, setActiveTab] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navbarRef = useRef(null); // Reference to the navbar

  const toggleDropdown = (index) => {
    setActiveTab(index === activeTab ? null : index);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close the dropdown if a click occurs outside of the navbar
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setActiveTab(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar" ref={navbarRef}>
      <div className="navbar-header">
        <div
          className={`hamburger ${isMobileMenuOpen ? "open" : ""}`}
          onClick={toggleMobileMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <ul className={`nav-list ${isMobileMenuOpen ? "show" : ""}`}>
        {tabData.map((tab, index) => (
          <li
            key={index}
            onClick={() => toggleDropdown(index)}
            className="nav-item"
          >
            {tab.name}{" "}
            <span className="arrow">{activeTab === index ? "▲" : "▼"}</span>
            {activeTab === index && (
              <ul className="dropdown">
                {tab.dropdownItems.map((item, idx) => (
                  <Link
                    key={idx}
                    to={`/${item.toLowerCase().replace(/\s+/g, "")}`}
                  >
                    <li className="dropdown-item">{item}</li>
                  </Link>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
