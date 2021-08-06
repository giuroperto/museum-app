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
  // specific item section data
  const [ historyItem, setHistoryItem ] = useState(null);
  // all history data items
  const [ allItemsHistory, setAllItemsHistory ] = useState(props.allItemsHistory);

// TODO pass back to the context all popped data

  // logic to show or hide back btn
  useEffect(() => {
    if (props.page) {
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

  // receiving all history data items and saving last item
  useEffect(() => {
    if (props.allItemsHistory && props.allItemsHistory.length > 0) {
      console.log('allItemsHistory updated');
      // popping last item of the array so the last one will be the item to go back to instead of the current item
      let itemsHistoryPopped = props.allItemsHistory;
      itemsHistoryPopped.pop();
      setAllItemsHistory(itemsHistoryPopped);
      
      // getting the array length in order to get the last item
      // the saved item on historyItem is the one to go back to
      let length = itemsHistoryPopped.length - 1;
      if (length >= 0) {
        setHistoryItem(itemsHistoryPopped[length]);
      }

      console.log('historyItem updated');
      console.log('itemsHistoryPopped', itemsHistoryPopped);
    }
  }, [props.allItemsHistory]);
  
  console.log('historyItem', historyItem);

  // receiving history routes as props
  useEffect(() => {
    if (props.history && props.history.length > 0) {
      // getting rid of the last current item, so the last route will be the one to go back to
      let historyRoutesPopped = props.history;
      historyRoutesPopped.pop();
      setHistoryRoutes(historyRoutesPopped);

      console.log('historyRoutesPopped', historyRoutesPopped);
    }
  }, [props.history]);

  console.log('historyRoutes', historyRoutes);

  // TODO check if we need to update all the time the historyItem or not -> to filter
  // TODO pop routes to leave the current situation
  const goBack = () => {
    let length = historyRoutes.length;
    console.log(length);

    // if user has navigated in more than 2 pages -> can't go back to home or categories
    // then we should get length - 2 to go back to the appropriate route
    if (length > 1) {
      // item is the the page to go back to
      let item = historyRoutes[length - 1];
      console.log('item: ', item);
      // use the previous item to show if the page before has a resource or not
      let previousItem = historyRoutes[length - 2];
      console.log('previousItem: ', previousItem);
      console.log('historyItem: ', historyItem);

      if (historyItem) {
        let resources;

        // to find if the page contains resources
        // first check if it is one of the categories
        if (previousItem === "/achiropita" || previousItem === "/orione" || previousItem === "/bixiga") {
          console.log('previous page is a category and resources are null');
          resources = null;
        } else {
          console.log('allItemsHistory: ', allItemsHistory);
          // removing last item of array so now the last item is the one to go back to
          let length = allItemsHistory.length - 2;
          console.log('length: ', length);
          let findPreviousItem = allItemsHistory[length].filter((e) => e.route === previousItem)[0];
          console.log('findPreviousItem: ', findPreviousItem);

          resources = findPreviousItem.resource ? findPreviousItem.resource : null;

        }
        
        console.log('resources: ', resources);
        console.log('historyItem', historyItem);

        props.getHistory(historyItem, item, !!resources, resources);
        console.log(item);

          // setHistoryItem(findPreviousItem);
          // setAllItemsHistory(updateAllItems);

        // TODO check what is being passed in getHistory
      }
    } else if (length === 1) {
      // go back to one of the categories: ORIONE, BIXIGA or ACHIROPITA
      // item is the page to go back to
      let item = historyRoutes[length - 1];
      console.log(item);
      // as it is a category page there are no resources to be shown
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
        console.log('props.page: ', props.page);
        console.log('props.historyItem: ', props.historyItem);
        console.log('historyRoutes: ', historyRoutes);

      } else if (length === 0) {
        // go HOME as the only entry is a category page
        console.log("go home");
        let resources = null;
        let homeMenu = [];
        let route = "/";
        props.getHistory(homeMenu, route, !!resources, resources);
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
