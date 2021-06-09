import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

import './Navbar.css';
import ROUTES from '../constants/routes';

const Navbar = () => {
  return (
    <div className="navbar-container">
      <Link to={ROUTES.HOME}><FaHome className="icon-home" /></Link>
      <h1 className="app-title">MEMORIAL ACHIROPITA - DON ORIONE</h1>
      <span className="app-subtitle">no Bixiga</span>
    </div>
  )
};

export default Navbar;