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
  // TODO check if can be deleted
  // the current section data used to create the menus
  const [ currentSectionData, setCurrentSectionData ] = useState(MENU[PAGE]);
  // TYPE OF PAGE: MENU (keep showing other buttons) and PAGE (show content)
  const [ pageType, setPageType ] = useState("menu");
  // PAGE type of content: PHOTO, TEXT, PDF OR VIDEO
  const [ pageContentType, setPageContentType ] = useState(null);
  // PAGE content: object with title, text and picture urls
  const [ pageContent, setPageContent ] = useState(null);
  // MENU "BOOLEAN" - resource (equal to true) | false (just buttons)
  const [ menuHasResources, setMenuHasResources ] = useState(false);
  // MENU resource type: PHOTO, VIDEO or TEXT
  const [ menuResourceType, setMenuResourceType ] = useState(null);

  // TODO check if routes dont get messed up
// getting states initialized
  useEffect(() => {
    setCurrentSectionData(MENU[PAGE]);
    // itemsArray, routesArray, hasResources, resource, isOriginNavbar
    props.getHistory([MENU[PAGE]], ["/", ROOTROUTE], false, null, false);
  }, []);

  // TODO check loop call and remove it
  // useEffect to track changes in context
  useEffect(() => {
    console.log('historyArray updated');
    
    if (historyArray.isOriginNavbar) {
      console.log('calling updatePage');
      updatePage();
    }

  }, [historyArray]);

  const updatePage = () => {
    console.log('inside updatePage');
    console.log('historyArray', historyArray);

    let routesLength = historyArray.route.length;
    let itemsLength = historyArray.itemHistory.length;
    console.log('routesLength', routesLength);
    console.log('itemsLength', itemsLength);

    if (routesLength > 0) {

      let lastRoute = historyArray.route[routesLength - 1];

      if (lastRoute === "/") {

        console.log('lastRoute is HOME');

        props.history.replace(lastRoute);

        // itemsArray, routesArray, hasResources, resource, isOriginNavbar
        props.getHistory([], [], null, null, false);

      } else if (lastRoute === ROUTES.ACHIROPITA || 
        lastRoute === ROUTES.ORIONE || lastRoute === ROUTES.BIXIGA) {

        console.log("ACHIROPITA page");
        console.log(historyArray.itemHistory);
        
        // historyArray, route, hasResources, resource, isOriginNavbar
        props.getHistory(historyArray.itemHistory, historyArray.route, historyArray.hasResources, historyArray.resources, false);

        console.log('currentSectionData', currentSectionData);
        
        // TODO evaluate updating current section data
        setCurrentSectionData(historyArray.itemHistory[0]);
        console.log('currentSectionData', currentSectionData);
        setPageType("menu");
        console.log('pageType', pageType);
        setMenuHasResources(false);
        console.log('menuHasResources', menuHasResources);
        setMenuResourceType(null);
        console.log('menuResourceType', menuResourceType);
        setPageContentType(null);
        console.log('pageContentType', pageContentType);
        setPageContent(null);
        console.log('pageContent', pageContent);
      } else {
        
        console.log('historyArray', historyArray);
        console.log('historyArray.itemHistory', historyArray.itemHistory);

        let arrayToFindItem = historyArray.itemHistory[itemsLength - 2];
        console.log("arrayToFindItem", arrayToFindItem);
        
        let updatedItem = arrayToFindItem.filter((e) => e.route === lastRoute)[0];
        console.log("updatedItem", updatedItem);

        checkSubitems(updatedItem, "verify");
      }

      props.history.replace(lastRoute);

    }
  };

  console.log(currentSectionData);

  // menu button is clicked -> passes topic to new section -> load section or content
  // also it will fetch info if the context is updated
  const fetchItem = (newTopic, option) => {

    console.log('new topic: ', newTopic);

    let updatedItem;
    let itemsLength = historyArray.itemHistory.length;

    console.log(currentSectionData);

    if (currentSectionData.length > 0) {
      console.log("inside currentSection true");
      updatedItem = currentSectionData.filter(el => el.item === newTopic)[0];
    } else if (itemsLength > 0) {
      console.log("inside currentSection false");
      updatedItem = historyArray.itemHistory[itemsLength - 1].filter(el => el.item === newTopic)[0];
    }

    console.log(currentSectionData);
    console.log(updatedItem);

    checkSubitems(updatedItem, option);
  };

  const checkSubitems = (item, option) => {

    if (item.subitems && item.subitems.length > 0) {
      console.log("this item has subitems");
      setCurrentSectionData(item.subitems);
      setPageType("menu");
    } else {
      console.log("this item has NOT subitems");
      setCurrentSectionData([]);
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
        setMenuResourceType(resourceData.type);
        setPageContent(resourceData);
        setPageContentType(resourceData.type);
      } else {
        setMenuResourceType(null);
        setPageContent(null);
        setPageContentType(null);
      }
    } else {
      setMenuResourceType(null);
      setPageContent(null);
      setPageContentType(null);
    }

    // if the resources property is present, it will set the data, if not, set to false
    setMenuHasResources(resourceData ? resourceData : false);

    if (option === "add") {
      console.log("add");
      props.getHistory([...historyArray.itemHistory, item.subitems], [...historyArray.route, item.route], !!resourceData, resourceData, false);
    } else if (option === "verify" && historyArray.isOriginNavbar) {
      console.log("verify + navbar");
      props.getHistory( historyArray.itemHistory, historyArray.route, historyArray.hasResources, historyArray.resources, false);
    }
  };

  const onClickSubmenu = (newTopic) => {
    console.log("CLICKED");
    console.log('historyArray', historyArray);

    // here it will always be an ADD option -> clicking in the menu and adding to the array
    fetchItem(newTopic, "add");
  };

  console.log(pageType);
  console.log(pageContent);
  console.log(pageContentType);

  return (
    <>
      <Navbar page={PAGE} getHistory={props.getHistory} />
      {
        pageType === "menu" && currentSectionData.length > 0 && (
          <div className="achiropita-container">
            <SubMenu click={onClickSubmenu} array={currentSectionData} resource={menuHasResources} pageSection={menuResourceType} />
          </div>
        )
      }
      {
        pageType === "page" && pageContentType === "text" && (
          <div className="achiropita-container">
            <TextPage content={pageContent} />
          </div>
        )
      }
      {
        pageType === "page" && pageContentType === "photo" && (
          <div className="achiropita-container">
            <PhotosPage content={pageContent} />
          </div>
        )
      }
      {
        pageType === "page" && pageContentType === "pdf" && (
          <div className="achiropita-container">
            <PdfPage content={pageContent} />
          </div>
        )
      }
      {
        pageType === "page" && pageContentType === "video" && (
          <div className="achiropita-container">
            <VideoPage content={pageContent} />
          </div>
        )
      }
      <Footer />
    </>
  )
};

export default Achiropita;
