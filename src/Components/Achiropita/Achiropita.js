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

  // passing the filtered array of the section data
  const [ filteredSectionData, setfilteredSectionData ] = useState(MENU[PAGE]);
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

// getting states initialized
  useEffect(() => {
    setfilteredSectionData(MENU[PAGE]);
    // historyArray, route, hasResources, resource
    // TODO check if routes dont get messed up
    props.getHistory([MENU[PAGE]], ["/", ROOTROUTE], false, null);
  }, []);

  // TODO check loop call and remove it
  // useEffect to track changes in context
  useEffect(() => {
    console.log('historyArray updated');
    let length = historyArray.route.length;

    if (length > 0) {
      let lastRoute = historyArray.route[length - 1];
      if (lastRoute === "/") {
        // historyArray, route, hasResources, resource, isOriginNavbar
        props.getHistory(null, null, null, null, false);
      } else if (lastRoute === ROUTES.ACHIROPITA || 
        lastRoute === ROUTES.ORIONE || lastRoute === ROUTES.BIXIGA) {
        console.log("ACHIROPITA page");
        console.log(historyArray.itemHistory);
          
        // historyArray, route, hasResources, resource, isOriginNavbar
        props.getHistory(historyArray.itemHistory, historyArray.route, historyArray.hasResources, historyArray.resources, false);
          
        // setfilteredSectionData(historyArray.itemHistory);
      } else {
          fetchItem(historyArray.itemHistory[length - 1].item, "verify");
      }
      props.history.replace(lastRoute);
    }
  }, [historyArray]);

  console.log(filteredSectionData);

  // when the button is clicked to go to another section, it passes the new topic to load other buttons or the content page
  // this is the logic for when buttons are pressed
  const fetchItem = (newTopic, option) => {

    console.log(`new topic: ${newTopic}`);
    filteredSectionData.map(e => console.log(e.item));

    let newItem;
    let lengthItems = historyArray.itemHistory.length;

    console.log(filteredSectionData);

    if (filteredSectionData.length > 0) {
      console.log("inside filteredSection true");
      newItem = filteredSectionData.filter(el => el.item === newTopic)[0];
    } else if (lengthItems > 0) {
      console.log("inside filteredSection false");
      newItem = historyArray.itemHistory[lengthItems - 1].filter(el => el.item === newTopic)[0];
    }

    console.log(filteredSectionData);
    console.log(newItem);

    checkSubitems(newItem, option);
  };

  const checkSubitems = (item, option) => {

    if (item.subitems && item.subitems.length > 0) {
      console.log("this item has subitems");
      setfilteredSectionData(item.subitems);
      setPageType("menu");
    } else {
      console.log("this item has NOT subitems");
      setfilteredSectionData([]);
      setPageType("page");
    }

    checkResources(item, option);
  };

  const checkResources = (item, option) => {
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

    if (option === "add") {
      console.log("add");
      props.getHistory([...historyArray.itemHistory, item.subitems], [...historyArray.route, item.route], !!resourceData.type, resourceData, false);
    } else if (option === "verify" && historyArray.isOriginNavbar) {
      console.log("verify + navbar");
      props.getHistory( historyArray.itemHistory, historyArray.route, historyArray.hasResources, historyArray.resources, false);
    }

    // if the resources property is present, it will be true, if not false
    setSectionResources(resourceData);
  };

  const onClickSubmenu = (newTopic) => {
    console.log("CLICKED");
    console.log('historyArray', historyArray);

    let length = historyArray.itemHistory.length;
    let getItem = historyArray.itemHistory[length - 1].filter((e) => e.item === newTopic)[0];
    console.log('getItem', getItem);
    console.log(getItem.route);

    // here it will always be an ADD option -> clicking in the menu and adding to the array
    fetchItem(newTopic, "add");
  };

  console.log(pageType);
  console.log(content);
  console.log(contentType);

  return (
    <>
      <Navbar page={PAGE} getHistory={props.getHistory} />
      {
        pageType === "menu" && filteredSectionData.length > 0 && (
          <div className="achiropita-container">
            <SubMenu click={onClickSubmenu} array={filteredSectionData} resource={sectionResources} pageSection={typeOfResource} />
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
