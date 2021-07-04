import { Link, useHistory } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { RiArrowGoBackLine } from "react-icons/ri";
import { useContext, useEffect, useState } from "react";

import './Navbar.css';
import ROUTES from '../constants/routes';
import { HistoryContext } from '../../Utils/Context/';

const Navbar = (props) => {

  console.log(props);
  // console.log(props.history.goBack());

  const historyData = useContext(HistoryContext);

  const [ showBackButton, setShowBackButton ] = useState("back-hide");
  // const [ lastPage, setLastPage ] = useState("");

  const history = useHistory();

  // const [ history, setHistory ] = useState(props.history);
  // const [ page, setPage ] = useState("");

  useEffect(() => {
    if (historyData.currentPageCategory === "HOME") {
      setShowBackButton("back-hide");
    } else {
      setShowBackButton("back-show");
    }
  }, [historyData]);

  useEffect(() => {
    if (history.location.pathname) {
      
    }
  }, [history]);

  // useEffect(() => {
  //   if (historyData.historyArray) {
  //     checkPage();
  //   }
  // }, [historyData]);

  // useEffect(() => {
  //   if ()
  // }, [])

  // const checkPage = () => {
  //   console.log("checkpage");
  //   console.log("history" + historyData);
  //   console.log("history lenght" + historyData.historyArray.length);
  //   console.log("inside checkpage if");
  //   let historyArray = historyData.historyArray;
  //   console.log("historyArray" + historyArray);
  //   let lastPageVisited = historyData.lastPage;
  //   console.log("lastPageVisited" + lastPageVisited);
  //   setLastPage(lastPageVisited);

    // let lastPage = history[positionToRemove - 1];
    // setHistory(historyArray);
    // setPage(lastPage);
    
  // };
  
  // const updateHistory = () => {
    
  //   let historyList = historyData.historyArray;
  //   let positionToRemove = historyList.length - 1;
  //   console.log("positionToRemove" + positionToRemove);
  //   let historyAfterGoBack = historyList.splice(positionToRemove, 1);
    
  //   let newLastPage = historyList[historyList.length - 1];
  //   console.log("newLastPage" + newLastPage);

  //   props.getHistory(historyAfterGoBack, newLastPage, props.page);

  // };

  console.log("history" + historyData);
  // console.log("page" + page);
  // console.log("props" + props.history);

  // TODO delete all irrelevant data

  return (
    <div className="navbar-container">
      <Link to={ROUTES.HOME}>
        <FaHome className="icon-home icon" />
      </Link>
      <div className="title-container">
        <h1 className="app-title">MEMORIAL ACHIROPITA - DON ORIONE</h1>
        <span className="app-subtitle">no Bixiga</span>
      </div>
      {
        showBackButton && history.length > 0 && (
          <button className={`navbar-btn ${showBackButton}`} onClick={() => history.goBack()}>
            <RiArrowGoBackLine className="icon-menu icon" />
          </button>
        )
      }
      {/* {
        showBackButton && (
          <Link to={lastPage} className={`navbar-btn ${showBackButton}`} onClick={() => updateHistory()}>
            <RiArrowGoBackLine className="icon-menu icon" />
          </Link>
        )
      } */}
    </div>
  )
};

export default Navbar;


// showBackButton && (
//   <Link to={setPriorPage}>
//     <RiArrowGoBackLine className="icon-menu icon" />
//   </Link>
// )