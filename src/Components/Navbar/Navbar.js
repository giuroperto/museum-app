import { Link, useHistory } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { RiArrowGoBackLine } from "react-icons/ri";
import { useEffect, useState } from "react";

import './Navbar.css';
import ROUTES from '../constants/routes';

const Navbar = (props) => {

  const [ showBackButton, setShowBackButton ] = useState("back-hide");
  const [ history, setHistory ] = useState(props.history);
  const [ page, setPage ] = useState("");

  useEffect(() => {

    if (props.page === "HOME") {
      setShowBackButton("back-hide");
    } else {
      setShowBackButton("back-show");
    }

    setHistory(props.history);
  }, [props]);

  useEffect(() => {
    if (history) {
      checkPage();
    }
  }, [history]);

  const checkPage = () => {
    console.log("checkpage");
    console.log("history" + history);
    console.log("history lenght" + history.length);
    console.log("inside checkpage if");
    let historyArray = history;
    console.log("historyArray" + historyArray);
    let lastPageVisited = historyArray[historyArray.length - 1];
    console.log("lastPageVisited" + lastPageVisited);
    let positionToRemove = history.indexOf(lastPageVisited);
    console.log("positionToRemove" + positionToRemove);
    let lastPage = history[positionToRemove - 1];
    console.log("lastPage" + lastPage);
    // let lastPage = historyArray.splice(positionToRemove, 1);
    // console.log("lastPage" + lastPage);
    setHistory(historyArray);
    setPage(lastPage);
  };

  console.log("history" + history);
  console.log("page" + page);
  console.log("props" + props);

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
          <Link to={page} className={`navbar-btn ${showBackButton}`}>
            <RiArrowGoBackLine className="icon-menu icon" />
          </Link>
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