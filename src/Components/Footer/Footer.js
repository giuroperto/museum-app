import { Link } from "react-router-dom";

import './Footer.css';
import ROUTES from '../constants/routes';

const Footer = () => {
  return (
    <div className="footer-container">
      <Link to={ROUTES.ORIONE}>
        <div>ORIONE</div>
      </Link>
      <Link to={ROUTES.ACHIROPITA}>
        <div>ACHIROPITA</div>
      </Link>
      <Link to={ROUTES.BIXIGA}>
        <div>BIXIGA</div>
      </Link>
    </div>
  )
};

export default Footer;