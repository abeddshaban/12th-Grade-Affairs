import { Link } from "react-router-dom";
import "./Styles/Footer.css";

const Footer = () => {
  return (
    <div className="footer_div">
      <nav className="footer_nav">
        <Link to="/terms">
          <button className="footer_btn">Terms & Privacy</button>
        </Link>
        <Link to="/contact-us">
          <button className="footer_btn">Contact-us</button>
        </Link>
      </nav>
    </div>
  );
};

export default Footer;
