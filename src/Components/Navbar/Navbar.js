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
  console.log(props);

  const historyArray = useContext(HistoryItemsContext);

  const [ showBackButton, setShowBackButton ] = useState("back-hide");
  const [ historyRoutes, setHistoryRoutes ] = useState(props.history);
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
    if (props && props.history) {
      setHistoryRoutes(props.history);
    }
  }, [props.history]);

  const goBack = () => {
    let length = historyRoutes.length;
    console.log(length);

    if (length > 2) {
      // deletar ultima entrada e voltar para a penultima
      let item = historyRoutes[length - 2];
      if (historyItem.length > 0) {
        props.getHistory(historyItem.filter((e) => e.route === item), item);
      }
      console.log(item);
    } else if (length === 2) {
      // go back to one of the categories: ORIONE, BIXIGA or ACHIROPITA
      let item = historyRoutes[length - 2]
      switch (item) {
        case "/achiropita":
          setHistoryItem(MENU.ACHIROPITA);
          props.getHistory(MENU.ACHIROPITA, item);
          break;
          case "/orione":
            setHistoryItem(MENU.ORIONE);
            props.getHistory(MENU.ORIONE, item);
            break;
            case "/bixiga":
              setHistoryItem(MENU.BIXIGA);
              props.getHistory(MENU.BIXIGA, item);
          break;
        default:
          break;
        }
      console.log(props.page);
      console.log(props.historyItem);
      console.log(historyRoutes);
      console.log("length 2");
    } else if (length === 1) {
      // go HOME
      console.log("só um elemento");
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
