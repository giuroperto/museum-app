import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card } from 'react-bootstrap';

import Footer from "../Footer/Footer";
import Navbar from '../Navbar/Navbar';
import SubMenu from '../SubMenu/MainSubMenu';
import MENU from '../constants/menus';
import ROUTES from '../constants/routes';
import "./Bixiga.css";
import TextPage from "../Pages/TextPage";
import PhotosPage from "../Pages/PhotosPage";
import PdfPage from "../Pages/PdfPage";

const Bixiga = (props) => {

  const PAGE = "BIXIGA";
  // primary root of the section
  const ROOTROUTE = ROUTES[PAGE];

  // setting the history of accessed pages and initializing with the primary root
  const [ topics, setTopics ] = useState([ROOTROUTE]);
  // passing the filtered array of the section data
  const [ filteredArray, setFilteredArray ] = useState(MENU[PAGE]);
  // tag to control the type of the page to load
  // possible values: MENU (keep showing other buttons) and PAGE (show content)
  const [ pageType, setPageType ] = useState("menu");
  // the type of content the PAGE will show
  // possible values: PHOTO or TEXT
  const [ contentType, setContentType ] = useState(null);
  // the actual resource/content to pass to the PAGE to show
  // for example: title, text and picture urls
  // the content will be the reference in the MENU to the CONTENT
  const [ content, setContent ] = useState(null);
  // tag to control if the MENU will also show another resource or just buttons
  const [ sectionResources, setSectionResources ] = useState(false);
  // the possible resources to show in a MENU page: PHOTO, VIDEO or TEXT
  const [ typeOfResource, setTypeOfResource ] = useState("");

  // when the button is clicked to go to another section, it passes the new topic to load other buttons or the content page
  const onClickSubmenu = (newTopic) => {
    console.log(`new topic: ${newTopic}`);
    fetchArray(newTopic);
    filteredArray.map(e => console.log(e.item))
  };

  console.log(filteredArray);
  console.log(topics);
  
  // this is the logic for when buttons are pressed
  const fetchArray = (newTopic) => {

    let newArray = filteredArray.filter(el => el.item === newTopic)[0];
    setTopics([...topics, newArray.route]);

    if (newArray.subitems && newArray.subitems.length > 0) {
      setFilteredArray(newArray.subitems);
      setPageType("menu");
    } else {
      setFilteredArray([]);
      setPageType("page");
    }

    if (newArray.resources) {

      let resourceData = newArray.resources;

      setTypeOfResource(resourceData.type);
      setContent(resourceData);
      setContentType(resourceData.type);
    }

    // if the resources property is present, it will be true, if not false
    setSectionResources(newArray.resources);
  };

  console.log(pageType);
  console.log(content);
  console.log(contentType);

  return (
    <>
      <Navbar history={topics} page={PAGE}/>
      {
        pageType === "menu" && filteredArray.length > 0 && (
          <div className="bixiga-container">
            <SubMenu click={onClickSubmenu} array={filteredArray} resource={sectionResources} pageSection={typeOfResource} />
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
      {
        pageType === "page" && contentType === "pdf" && (
          <div className="achiropita-container">
            <PdfPage content={content} />
          </div>
        )
      }
    </>
  )
};

export default Bixiga;