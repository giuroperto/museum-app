import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { RiArrowGoBackLine } from "react-icons/ri";
import { useContext, useEffect, useState } from "react";

import './Navbar.css';
import ROUTES from '../constants/routes';
import { HistoryItemsContext } from '../../Utils/Context/';
import MENU from "../constants/menus";

const Navbar = (props) => {
  // getting all info from the context
  const historyArray = useContext(HistoryItemsContext);

  // className to show or hide the back button
  const [ showBackButton, setShowBackButton ] = useState("back-hide");
  // className to show or hide the transparent element (used to align page)
  const [ showSquare, setShowSquare ] = useState("square-hide");
  // history routes that user clicked
  const [ historyRoutes, setHistoryRoutes ] = useState(props.history);
  // section data
  const [ historyItem, setHistoryItem ] = useState(MENU[props.page]);

  // logic to show or hide back btn
  useEffect(() => {
    if (props.page) {
      setHistoryItem(MENU[props.page]);
      if (props.page === "HOME") {
        setShowBackButton("back-hide");
        setShowSquare("square-show");
      } else {
        setShowBackButton("back-show");
        // setShowBackButton("back-hide");
        setShowSquare("square-hide");
      }
    }
  }, [props.page]);
  
  // receiving routes history as props
  useEffect(() => {
    if (props.history) {
      setHistoryRoutes(props.history);
    }
  }, [props.history]);

  // TODO check if we need to update all the time the historyItem or not -> to filter
  // TODO check why navbar context is coming null
  const goBack = () => {
    let length = historyRoutes.length;
    console.log(length);

    // user has navigated in more than 2 pages -> can't go back to home or categories
    // then we should get length - 2 to go back to the appropriate route
    if (length > 2) {
      let item = historyRoutes[length - 2];
      console.log(`item: `, item);
      // use the previous item to show if the page has a resource or not
      let previousItem = historyRoutes[length - 3];
      console.log(`previousItem: `, previousItem);
      console.log(`historyItem: `, historyItem);

      if (historyItem.length > 0) {
        let resources;

        // to find if the page contains resources
        // first check if it is one of the categories
        if (previousItem === "/achiropita" || previousItem === "/orione" || previousItem === "/bixiga") {
          resources = null;
        } else {
          // TODO adjust for cases when you have to go deeper into the array
          let findPreviousItem = historyItem.filter((e) => e.route === previousItem);
          console.log(`findPreviousItem: `, findPreviousItem);

          resources = findPreviousItem.resource ? findPreviousItem.resource : null;
        }

        console.log(`resources: `, resources);
        
        props.getHistory(historyItem.filter((e) => e.route === item), item, !!resources, resources);
        console.log(item);
      }
    } else if (length === 2) {
      // go back to one of the categories: ORIONE, BIXIGA or ACHIROPITA

      let item = historyRoutes[length - 2];
      console.log(item);
      let resources = null;

      switch (item) {
        case "/achiropita":
          props.getHistory(MENU.ACHIROPITA, item, !!resources, resources);
          break;
          case "/orione":
            props.getHistory(MENU.ORIONE, item, !!resources, resources);
            break;
          case "/bixiga":
              props.getHistory(MENU.BIXIGA, item, !!resources, resources);
          break;
        default:
          break;
        }
        console.log(`props.page: `, props.page);
        console.log(`props.historyItem: `, props.historyItem);
        console.log(`historyRoutes: `, historyRoutes);
      } else if (length === 1) {
        // go HOME
        console.log("go home");
        let resources = null;
        let homeMenu = [];
        let route = "/";
        props.getHistory(homeMenu, route, !!resources, resources);
      }
    };
    
    console.log(`props: `, props);
    console.log(`historyArray: `, historyArray);

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
        showSquare && (
          <div className={`navbar-square ${showBackButton}`}></div>
        )
      }
      {
        showBackButton && props.history && props.history.length > 0 && (
          <button className={`navbar-btn ${showBackButton}`} onClick={() => goBack()}>
            <RiArrowGoBackLine className="icon-menu icon" />
          </button>
        )
      }
    </div>
  )
};

export default Navbar;
