import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card } from 'react-bootstrap';

import Footer from "../Footer/Footer";
import Navbar from '../Navbar/Navbar';
import SubMenu from '../SubMenu/MainSubMenu';
import { HistoryContext } from '../../Utils/Context';
import MENU from '../constants/menus';
import ROUTES from '../constants/routes';
import "./Achiropita.css";
import TextPage from "../Pages/TextPage";
import PhotosPage from "../Pages/PhotosPage";

const Achiropita = (props) => {

  const PAGE = "ACHIROPITA";
  const ROOTROUTE = ROUTES[PAGE];

  const [ topics, setTopics ] = useState([ROOTROUTE]);
  const [ filteredArray, setFilteredArray ] = useState(MENU[PAGE]);
  const [ pageType, setPageType ] = useState("menu");
  const [ contentType, setContentType ] = useState(null);
  const [ content, setContent ] = useState(null);

  const onClickSubmenu = (newTopic) => {
    console.log(`new topic: ${newTopic}`);
    fetchArray(newTopic);
    filteredArray.map(e => console.log(e.item))
  };

  console.log(filteredArray);
  console.log(topics);
  
  const fetchArray = (newTopic) => {
    let newArray = filteredArray.filter(el => el.item === newTopic)[0];
    setTopics([...topics, newArray.route])
    if (newArray.subitems && newArray.subitems.length > 0) {
      setFilteredArray(newArray.subitems);
      setPageType("menu");
    } else {
      setFilteredArray([]);
      setPageType("page");
    }
    if (newArray.resources) {
      setContent(newArray.resources);
      setContentType(newArray.resources.type);
    };
  };

  console.log(pageType);
  console.log(content);
  console.log(contentType);

  return (
    <>
      <Navbar history={topics} />
      {
        pageType === "menu" && content && (
          <div className="achiropita-container">
            <SubMenu click={onClickSubmenu} array={filteredArray} />
          </div>
        )
      }
      {
        pageType === "menu" && filteredArray.length > 0 && (
          <div className="achiropita-container">
            <SubMenu click={onClickSubmenu} array={filteredArray} />
          </div>
        )
      }
      {
        pageType === "page" && contentType === "text" && (
          <div className="achiropita-container">
            <TextPage content={content} />
          </div>
        )
      }
      {
        pageType === "page" && contentType === "photo" && (
          <div className="achiropita-container">
            <PhotosPage content={content} />
          </div>
        )
      }
    </>
  )
};

export default Achiropita;
