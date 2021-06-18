import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { RiArrowGoBackLine } from "react-icons/ri";

import './Navbar.css';
import ROUTES from '../constants/routes';

const Navbar = () => {
  return (
    <div className="navbar-container">
    {/* TODO add link to menu when not in home screen */}
      <Link to={ROUTES.HOME}>
        <FaHome className="icon-home icon" />
      </Link>
      <div className="title-container">
        <h1 className="app-title">MEMORIAL ACHIROPITA - DON ORIONE</h1>
        <span className="app-subtitle">no Bixiga</span>
      </div>
      {/* TODO add link to go back */}
      <Link>
        <RiArrowGoBackLine className="icon-menu icon" />
      </Link>
    </div>
  )
};

export default Navbar;