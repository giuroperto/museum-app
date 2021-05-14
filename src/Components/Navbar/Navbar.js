import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

import './Navbar.css';
import ROUTES from '../constants/routes';

const Navbar = () => {
  return (
    <div className="navbar-container">
      <Link to={ROUTES.HOME}><FaHome className="icon-home" /></Link>
      <h1 className="app-title">MUSEU DO BIXIGA</h1>
    </div>
  )
};

export default Navbar;