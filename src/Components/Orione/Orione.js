import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card } from 'react-bootstrap';

import Footer from "../Footer/Footer";
import Navbar from '../Navbar/Navbar';
import SubMenu from '../SubMenu/MainSubMenu';
import { HistoryContext } from '../../Utils/Context';
import MENU from '../constants/menus';
import "./Orione.css";
import TextPage from "../Pages/TextPage";
import PhotosPage from "../Pages/PhotosPage";

const Orione = (props) => {

  const PAGE = "ORIONE";

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
          <div className="orione-container">
            <SubMenu click={onClickSubmenu} array={filteredArray} />
          </div>
        )
      }
      {
        pageType === "menu" && filteredArray.length > 0 && (
          <div className="orione-container">
            <SubMenu click={onClickSubmenu} array={filteredArray} />
          </div>
        )
      }
      {
        pageType === "page" && contentType === "text" && (
          <div className="orione-container">
            <TextPage content={content} />
          </div>
        )
      }
      {
        pageType === "page" && contentType === "photo" && (
          <div className="orione-container">
            <PhotosPage content={content} />
          </div>
        )
      }
    </>
  )
};

export default Orione;




// import { Link } from "react-router-dom";
// import { Button } from "react-bootstrap";

// import MENU from '../constants/menus';

// import "./Orione.css";
// import Footer from '../Footer/Footer';
// import Navbar from '../Navbar/Navbar';
// import SubMenu from '../SubMenu/MainSubMenu';
// import videoDonOrione from './centenário - vinheta PT -  AMON - orione - cc.mp4';
// // import videoDonOrione from '%PUBLIC_URL%/assets/centenário - vinheta PT -  AMON - orione - cc.mp4';

// const Orione = () => {
//   return (
//     <>
//       <Navbar />
//       <div className="orione-container">
//         <SubMenu type="ORIONE" />
//       </div>
//       {/* <Footer /> */}
//     </>
//   )
// };

// export default Orione;

// // TODO change menu here to a new component and pass links by props

