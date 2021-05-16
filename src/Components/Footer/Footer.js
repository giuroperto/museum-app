import { Link } from "react-router-dom";

import './Footer.css';
import ROUTES from '../constants/routes';

const Footer = () => {

  return (
    <div className="footer-container">
      <Link to={ROUTES.ORIONE} className="footer-link">
        <div>ORIONE</div>
      </Link>
      <Link to={ROUTES.ACHIROPITA} className="footer-link">
        <div>ACHIROPITA</div>
      </Link>
      <Link to={ROUTES.BIXIGA} className="footer-link">
        <div>BIXIGA</div>
      </Link>
    </div>
  )
};

export default Footer;