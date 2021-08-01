import { Link, useHistory } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { RiArrowGoBackLine } from "react-icons/ri";
import { useContext, useEffect, useState } from "react";

import './Navbar.css';
import ROUTES from '../constants/routes';
import MENUS from '../constants/menus';
import { HistoryItemsContext } from '../../Utils/Context/';
import MENU from "../constants/menus";

const Navbar = (props) => {
  // getting all info from the context
  const historyArray = useContext(HistoryItemsContext);

  // className to show or hide the back button
  const [ showBackButton, setShowBackButton ] = useState("back-hide");
  // history routes that user clicked
  const [ historyRoutes, setHistoryRoutes ] = useState(props.history);
  // section data
  const [ historyItem, setHistoryItem ] = useState(MENU[props.page]);

  
  useEffect(() => {
    if (props.page) {
      setHistoryItem(MENU[props.page]);
      if (props.page === "HOME") {
        setShowBackButton("back-hide");
      } else {
        setShowBackButton("back-show");
      }
    }
  }, [props.page]);
  
  useEffect(() => {
    if (props.history) {
      setHistoryRoutes(props.history);
    }
  }, [props.history]);

  // TODO check if we need to update all the time the historyItem or not -> to filter
  const goBack = () => {
    let length = historyRoutes.length;

    if (length > 2) {
      // user has navigated in more than 2 pages -> can't go back to home or categories
      // then we should get length - 2 to go back to the appropriate route
      let item = historyRoutes[length - 2];
      let previousItem = historyRoutes[length - 3];
      if (historyItem.length > 0) {
        let findPreviousItem = historyItem.filter((e) => e.route === previousItem);
        let resources = findPreviousItem.resource ? findPreviousItem.resource : null;
        
        props.getHistory(historyItem.filter((e) => e.route === item), item, !!resources, resources);
      }
      console.log(item);
    } else if (length === 2) {
      // go back to one of the categories: ORIONE, BIXIGA or ACHIROPITA

      let item = historyRoutes[length - 2];
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
      console.log(props.page);
      console.log(props.historyItem);
      console.log(historyRoutes);
    } else if (length === 1) {
      // go HOME
      // TODO adjust homemenu
      let resources = null;
      let route = "/";
      let homeMenu = ["Achiropita", "Orione", "Bixiga"];
      props.getHistory(homeMenu, route, !!resources, resources);
    }
  };

  console.log(historyArray);

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
