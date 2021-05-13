import { Link } from "react-router-dom";

import './Navbar.css';
import ROUTES from '../constants/routes';

const Navbar = () => {
  return (
    <div className="navbar-container">
      <Link to={ROUTES.HOME}>HOME</Link>
    </div>
  )
};

export default Navbar;