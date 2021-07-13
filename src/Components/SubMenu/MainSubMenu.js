import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useEffect, useState } from "react";

import "./SubMenu.css";
import videoDonOrione from './centenário - vinheta PT -  AMON - orione - cc.mp4';

const MainSubMenu = (props) => {

  const [ menuArray, setMenuArray ] = useState(props.array);
  // whether there is going to be another section (picture or movie) in the page.
  // type of resource
  const [ pageSection, setPageSection ] = useState(props.pageSection);
  // resource content
  const [ sectionResource, setSectionResource ] = useState(props.resource);

  // creating individual tags to identify the type of resource
  const [ isImage, setIsImage ] = useState(false);
  const [ isVideo, setIsVideo ] = useState(false);
  const [ isText, setIsText ] = useState(false);
  // setting different ClassName if it is text
  const [ containerClassName, setContainerClassName ] = useState("submenu-container");
  const [ menuClassName, setMenuClassName ] = useState("submenu-item-container");
  const [ btnContainerClassName, setBtnContainerClassName ] = useState("btn-container");
  const [ btnClassName, setBtnClassName ] = useState("btn-menu");

  useEffect(() => {
    setMenuArray(props.array);
    setPageSection(props.pageSection);
    setSectionResource(props.resource);

    switch (props.pageSection) {
      case "photo":
        setIsImage(true);
        setIsVideo(false);
        setIsText(false);
        // setContainerClassName("submenu-container");
        // setMenuClassName("submenu-item-container");
        // setBtnClassName("btn-container");
        setBtnContainerClassName("btn-container resource");
        break;
      case "text":
        setIsImage(false);
        setIsVideo(false);
        setIsText(true);
        setContainerClassName("submenu-text-container");
        setMenuClassName("item-text-container");
        setBtnClassName("btn-text-menu");
        setBtnContainerClassName("btn-text-container");
        break;
      case "video":
        setIsImage(false);
        setIsVideo(true);
        setIsText(false);
        // setContainerClassName("submenu-container");
        // setMenuClassName("submenu-item-container");
        // setBtnClassName("btn-container");
        setBtnContainerClassName("btn-container resource");
        break;
      default:
        setIsImage(false);
        setIsVideo(false);
        setIsText(false);
        // setContainerClassName("submenu-container");
        // setMenuClassName("submenu-item-container");
        // setBtnClassName("btn-container");
        setBtnContainerClassName("btn-container");
      break;
    }

  }, [props]);

  console.log(props);
  console.log(pageSection);
  console.log(sectionResource);
  console.log(isImage);
  console.log(isVideo);
  console.log(isText);

  return (
    <div className={containerClassName}>
      {
        sectionResource && isImage && (
          <div className={menuClassName}>
            <img src={sectionResource} alt="foto relativa a seção" className="submenu-image" />
          </div>
        )
      }
      {
        sectionResource && isVideo && (
          <div className={menuClassName}>
            <video src={sectionResource} controls="controls" width="60%" />
          </div>
        )
      }
      <div className={btnContainerClassName}>
        {
          menuArray.length > 0 && menuArray.map(item => {
            return (
              <div className={menuClassName} key={`${item.item}-${item.route}`}>
                <Link to={item.route} className="btn-link">
                  <Button variant="secondary" size="lg" className={btnClassName} onClick={() => props.click(item.item)} > { item.item } </Button>
                </Link>
              </div>
            )
          })
        }
      </div>
      {
        sectionResource && isText && (
          <div className="text-resource">
            <div className={menuClassName}>
              <h2 className="page-title"> {sectionResource.title} </h2>
              <p className="page-text"> {sectionResource.text} </p>
            </div>
          </div>
        )
      }
    </div>
  )
};

export default MainSubMenu;
