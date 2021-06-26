import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useEffect, useState } from "react";

import MENU from '../constants/menus';

import "./SubMenu.css";

const TextSubMenu = (props) => {

  const [ propsData, setPropsData ] = useState({});
  const [ type, setType ] = useState(props.type);
  const [ depth, setDepth ] = useState(props.depth);
  const [ topic, setTopic ] = useState(props.topic);
  const [ typeArray, setTypeArray ] = useState(MENU[type]);

  console.log(topic, depth);

  let filteredTopic = [];

  if (depth == 1) {
    filteredTopic = typeArray.filter(el => el.item === topic)[0];
  } else {
    filteredTopic = typeArray.filter(el => el.item === topic)[0];
  }
  
  console.log(filteredTopic);

  let nextDepth = 1 + Number(propsData.depth);

  useEffect(() => {
    setPropsData(props);
  }, [props]);

  return (
    <div className="submenu-container">
      {
        filteredTopic && filteredTopic.subitems && filteredTopic.subitems.map(subitem => {
          return (
            <div className="item-container">
              <Link to={subitem.route}>
                <Button variant="secondary" size="lg" className="btn-menu" onClick={() => propsData.click(nextDepth, subitem.item)}> { subitem.item } </Button>
              </Link>
            </div>
          )
        }
        )
      }
    </div>
  )
};

export default TextSubMenu;
