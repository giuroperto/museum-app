import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card } from 'react-bootstrap';

import Footer from "../Footer/Footer";
import Navbar from '../Navbar/Navbar';
import SubMenu from '../SubMenu/MainSubMenu';
import { HistoryContext } from '../../Utils/Context';
import MENU from '../constants/menus';
import "./Bixiga.css";
import TextPage from "../Pages/TextPage";
import PhotosPage from "../Pages/PhotosPage";

const Bixiga = (props) => {

  const PAGE = "BIXIGA";

  const [ topics, setTopics ] = useState([PAGE]);
  const [ filteredArray, setFilteredArray ] = useState(MENU[PAGE]);
  const [ pageType, setPageType ] = useState("menu");
  const [ contentType, setContentType ] = useState(null);
  const [ content, setContent ] = useState(null);

  const onClickSubmenu = (newTopic) => {
    console.log(`new topic: ${newTopic}`);
    fetchArray(newTopic);
    filteredArray.map(e => console.log(e.item))
    setTopics([...topics, newTopic]);
  };

  console.log(filteredArray);
  console.log(topics);
  
  const fetchArray = (newTopic) => {
    let newArray = filteredArray.filter(el => el.item === newTopic)[0];
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
      <Navbar page={PAGE} />
      {
        pageType === "menu" && content && (
          <div className="bixiga-container">
            <SubMenu click={onClickSubmenu} array={filteredArray} />
          </div>
        )
      }
      {
        pageType === "menu" && filteredArray.length > 0 && (
          <div className="bixiga-container">
            <SubMenu click={onClickSubmenu} array={filteredArray} />
          </div>
        )
      }
      {
        pageType === "page" && contentType === "text" && (
          <div className="bixiga-container">
            <TextPage content={content} />
          </div>
        )
      }
      {
        pageType === "page" && contentType === "photo" && (
          <div className="bixiga-container">
            <PhotosPage content={content} />
          </div>
        )
      }
    </>
  )
};

export default Bixiga;
