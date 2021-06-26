import { Link, useHistory } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { RiArrowGoBackLine } from "react-icons/ri";
import { useEffect, useState, useContext } from "react";

import './Navbar.css';
import ROUTES from '../constants/routes';
import { HistoryContext } from '../../Utils/Context';

const Navbar = (props) => {

  const [ showBackButton, setShowBackButton ] = useState("back-hide");

  let history = useHistory();
  const historyInfo = useContext(HistoryContext);

  useEffect(() => {
    if (props.page === "HOME") {
      setShowBackButton("back-hide");
    } else {
      setShowBackButton("back-show");
    }
  }, []);
  

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
      {
        showBackButton && (
          <button className={`navbar-btn ${showBackButton}`} onClick={() => history.goBack()}>
            <RiArrowGoBackLine className="icon-menu icon" />
          </button>
        )
      }
    </div>
  )
};

export default Navbar;


// showBackButton && (
//   <Link to={setPriorPage}>
//     <RiArrowGoBackLine className="icon-menu icon" />
//   </Link>
// )