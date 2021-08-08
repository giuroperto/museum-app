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

  // logic to show or hide back btn
  useEffect(() => {
    if (props.page) {
      if (props.page === "HOME") {
        setShowBackButton("back-hide");
        setShowSquare("square-show");
      } else {
        setShowBackButton("back-show");
        setShowSquare("square-hide");
      }
    }
  }, [props.page]);

  const goBack = () => {
    let routesLength = historyArray.route.length;
    let itemsLength = historyArray.itemHistory.length;

    let goBackItem = historyArray.itemHistory[itemsLength - 2];
    console.log(routesLength);

    if (routesLength === 1 || routesLength === 2) {

      // first entry is always "/" and the second is the category page
      // both routes should lead back to HOME "/"
      console.log("go home");
      let route = "/";
      // itemsArray, routesArray, hasResource, resourceContent, isOriginNavbar
      props.getHistory([], [route], false, null, true);
      
    } else if (routesLength === 3) {

      // go back to one of the categories: ORIONE, BIXIGA or ACHIROPITA
      // item is the page to go back to
      let item = historyArray.route[routesLength - 2];
      console.log(item);
      console.log('historyArray', historyArray);
      // as it is a category page there are no resources to be shown
      let resources = null;
      
      switch (item) {
        case "/achiropita":
          // itemsArray, routesArray, hasResource, resourceContent, isOriginNavbar
          props.getHistory([MENU.ACHIROPITA], ["/", item], !!resources, resources, true);
          break;
        case "/orione":
          props.getHistory([MENU.ORIONE], ["/", item], !!resources, resources, true);
          break;
        case "/bixiga":
          props.getHistory([MENU.BIXIGA], ["/", item], !!resources, resources, true);
          break;
        default:
          break;
      }
      console.log('props.page: ', props.page);
    } else if (routesLength > 3) {

      // navigated 3+ pages -> can't go back to home or categories
      // then we should get length - 2 to go back to the appropriate route

      // item is the the page to go back to
      let item = historyArray.route[routesLength - 2];
      console.log('item: ', item);

      // use the previous item to show whether the previous page has a resource
      let previousItem = historyArray.route[routesLength - 3];
      console.log('previousItem: ', previousItem);
      console.log('historyArray: ', historyArray);

      if (goBackItem) {

        let resources;

        // to find if the page contains resources
        // first check if it is one of the categories
        if (previousItem === "/achiropita" || previousItem === "/orione" || previousItem === "/bixiga") {

          console.log('previous page is a category and resources are null');
          resources = null;

        } else {

          console.log('historyArray: ', historyArray);

          // removing last item of array so now the last item is the new current one
          let previousItemPosition = itemsLength - 4;
          console.log('previousItemPosition: ', previousItemPosition);
          let findPreviousItem = historyArray.itemHistory[previousItemPosition].filter((e) => e.route === previousItem)[0];
          console.log('findPreviousItem: ', findPreviousItem);

          resources = findPreviousItem.resource ? findPreviousItem.resource : null;
        }
        
        console.log('resources: ', resources);
        console.log('goBackItem', goBackItem);
        console.log('historyArray before pop', historyArray);
        
        let updatedItemHistory = historyArray.itemHistory;
        updatedItemHistory.pop();
        
        let updatedRouteHistory = historyArray.route;
        updatedRouteHistory.pop();
        
        console.log('historyArray after pop', updatedItemHistory);
        console.log('historyArray after pop', updatedRouteHistory);

        // updating data to the current ones
        props.getHistory(updatedItemHistory, updatedRouteHistory, !!resources, resources, true);

        console.log('item:', item);

        console.log('historyArray', historyArray);
      }
    }
  };
    
  console.log('props: ', props);
  console.log('historyArray: ', historyArray);

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
        showBackButton && historyArray && historyArray.route.length > 0 && (
          <button className={`navbar-btn ${showBackButton}`} onClick={() => goBack()}>
            <RiArrowGoBackLine className="icon-menu icon" />
          </button>
        )
      }
    </div>
  )
};

export default Navbar;
