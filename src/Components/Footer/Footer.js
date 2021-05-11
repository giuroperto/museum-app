import { Link } from "react-router-dom";
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer-container">
      <Link>
        <div>ORIONE</div>
      </Link>
      <Link>
        <div>ACHIROPITA</div>
      </Link>
      <Link>
        <div>BIXIGA</div>
      </Link>
    </div>
  )
};

export default Footer;