import { useContext, useEffect, useState } from "react";

import Footer from "../Footer/Footer";
import Navbar from '../Navbar/Navbar';
import SubMenu from '../SubMenu/MainSubMenu';
import MENU from '../constants/menus';
import ROUTES from '../constants/routes';
import "./Achiropita.css";
import TextPage from "../Pages/TextPage";
import PhotosPage from "../Pages/PhotosPage";
import PdfPage from "../Pages/PdfPage";
import VideoPage from "../Pages/VideoPage";
import { HistoryItemsContext } from '../../Utils/Context/';

const Achiropita = (props) => {

  console.log(props);
  const historyArray = useContext(HistoryItemsContext);
  console.log(historyArray);

  const PAGE = "ACHIROPITA";
  // primary root of the section
  const ROOTROUTE = ROUTES[PAGE];

  // setting the history of accessed pages and initializing with the primary root
  const [ topics, setTopics ] = useState([ROOTROUTE]);
  // passing the filtered array of the section data
  const [ filteredArray, setFilteredArray ] = useState(MENU[PAGE]);
  // array of history items to reload the menu when going back
  const [ historyItems, setHistoryItems ] = useState([]);
  // tag to control the type of the page to load
  // possible values: MENU (keep showing other buttons) and PAGE (show content)
  const [ pageType, setPageType ] = useState("menu");
  // the type of content the PAGE will show
  // possible values: PHOTO, TEXT, PDF OR VIDEO
  const [ contentType, setContentType ] = useState(null);
  // the actual resource/content to pass to the PAGE to show
  // for example: title, text and picture urls
  // the content will be the reference in the MENU to the CONTENT
  const [ content, setContent ] = useState(null);
  // tag to control if the MENU will also show another resource or just buttons
  const [ sectionResources, setSectionResources ] = useState(false);
  // the possible resources to show in a MENU page: PHOTO, VIDEO or TEXT
  const [ typeOfResource, setTypeOfResource ] = useState(null);

  // useEffect to track changes in context
  useEffect(() => {
    if (historyArray.route) {
      if (historyArray.route === "/") {
        props.history.replace("/");
        // historyArray, route, hasResources, resource
        props.getHistory(null, null, null, null);
      } else if (historyArray.route === ROUTES.ACHIROPITA || 
        historyArray.route === ROUTES.ORIONE ||
        historyArray.route === ROUTES.BIXIGA) {
          // setHistoryItems([...historyItems, MENU[PAGE]]);
          // setTopics([ROOTROUTE]);
          // props.getHistory(MENU[PAGE], ROOTROUTE, false, null);
      } else {
        fetchItem(historyArray.itemHistory.item);
        // props.getHistory(, topics, )
      }
    }
  }, [historyArray]);

  useEffect(() => {
    setHistoryItems([...historyItems, MENU[PAGE]]);
    setTopics([ROOTROUTE]);
    props.getHistory(MENU[PAGE], ROOTROUTE, false, null);
  }, []);

  console.log(filteredArray);
  console.log(topics);
  console.log(historyItems);
  
  // when the button is clicked to go to another section, it passes the new topic to load other buttons or the content page
  // this is the logic for when buttons are pressed
  const fetchItem = (newTopic) => {
    console.log(`new topic: ${newTopic}`);
    filteredArray.map(e => console.log(e.item));
    console.log(newTopic);

    let newItem = filteredArray.filter(el => el.item === newTopic)[0];
    setTopics([...topics, newItem.route]);
    console.log(`adding topic ${topics}`);

    console.log(newItem);

    checkSubitems(newItem);
    checkResources(newItem);
  };

  const checkSubitems = (item) => {

    if (item.subitems && item.subitems.length > 0) {
      console.log("this item has subitems");
      setFilteredArray(item.subitems);
      setHistoryItems([...historyItems, item.subitems]);
      setPageType("menu");
    } else {
      console.log("this item has NOT subitems");
      setFilteredArray([]);
      setPageType("page");
    }
  };

  const checkResources = (item) => {
    console.log(item.resources);
    
    let resourceData = item.resources;

    if (resourceData) {
      console.log(resourceData.type);
      if (resourceData.type) {
        setTypeOfResource(resourceData.type);
        setContent(resourceData);
        setContentType(resourceData.type);
      } else {
        setTypeOfResource(null);
        setContent(null);
        setContentType(null);
      }
    } else {
      setTypeOfResource(null);
      setContent(null);
      setContentType(null);
    }

    // if the resources property is present, it will be true, if not false
    setSectionResources(!!resourceData);
  };

  console.log(pageType);
  console.log(content);
  console.log(contentType);
  console.log(historyItems);

  return (
    <>
      <Navbar history={topics} page={PAGE} getHistory={props.getHistory} />
      {
        pageType === "menu" && filteredArray.length > 0 && (
          <div className="achiropita-container">
            <SubMenu click={fetchItem} array={filteredArray} resource={sectionResources} pageSection={typeOfResource} />
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
      {
        pageType === "page" && contentType === "pdf" && (
          <div className="achiropita-container">
            <PdfPage content={content} />
          </div>
        )
      }
      {
        pageType === "page" && contentType === "video" && (
          <div className="achiropita-container">
            <VideoPage content={content} />
          </div>
        )
      }
      <Footer />
    </>
  )
};

export default Achiropita;
