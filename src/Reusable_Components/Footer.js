import React from "react";
import { Link } from "react-router-dom";
import "./Styles/Footer.css";

const Footer = () => {
  return (
    <div className="footer_div">
      <nav className="footer_nav">
        <Link to="/terms">
          <button className="footer_btn">Terms & Privacy</button>
        </Link>
      </nav>
    </div>
  );
};

export default Footer;
