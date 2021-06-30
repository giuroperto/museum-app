import { Link, useHistory } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { RiArrowGoBackLine } from "react-icons/ri";
import { useContext, useEffect, useState } from "react";

import './Navbar.css';
import ROUTES from '../constants/routes';
import { HistoryContext } from '../../Utils/Context/';

const Navbar = (props) => {

  console.log(props);

  const historyData = useContext(HistoryContext);

  const [ showBackButton, setShowBackButton ] = useState("back-hide");
  const [ lastPage, setLastPage ] = useState("");
  // const [ history, setHistory ] = useState(props.history);
  // const [ page, setPage ] = useState("");

  useEffect(() => {

    if (historyData.currentPageCategory === "HOME") {
      setShowBackButton("back-hide");
    } else {
      setShowBackButton("back-show");
    }

    // setHistory(props.history);
  }, [historyData]);

  useEffect(() => {
    if (historyData.historyArray) {
      checkPage();
    }
  }, [historyData]);

  const checkPage = () => {
    console.log("checkpage");
    console.log("history" + historyData);
    console.log("history lenght" + historyData.historyArray.length);
    console.log("inside checkpage if");
    let historyArray = historyData.historyArray;
    console.log("historyArray" + historyArray);
    let lastPageVisited = historyData.lastPage;
    console.log("lastPageVisited" + lastPageVisited);
    setLastPage(lastPageVisited);

    // let lastPageVisited = historyArray[historyArray.length - 1];
    // let positionToRemove = history.indexOf(lastPageVisited);
    // console.log("positionToRemove" + positionToRemove);
    // let lastPage = history[positionToRemove - 1];
    // console.log("lastPage" + lastPage);
    // let lastPage = historyArray.splice(positionToRemove, 1);
    // console.log("lastPage" + lastPage);
    // setHistory(historyArray);
    // setPage(lastPage);

  };

  const updateHistory = () => {
    
    let historyList = historyData.historyArray;
    let positionToRemove = historyList.length - 1;
    let historyAfterGoBack = historyList.splice(positionToRemove, 1);

    let newLastPage = historyList[historyList.length - 1];

    props.getHistory(historyAfterGoBack, newLastPage, props.page);

  };

  console.log("history" + historyData);
  // console.log("page" + page);
  // console.log("props" + props.history);

  // TODO delete all irrelevant data

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
          <Link to={lastPage} className={`navbar-btn ${showBackButton}`} onClick={() => updateHistory()}>
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