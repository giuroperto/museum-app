import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useEffect, useState } from "react";

import MENU from '../constants/menus';

import "./SubMenu.css";

const MainSubMenu = (props) => {

  const [ type, setType ] = useState(props.type);
  const [ depth, setDepth ] = useState(props.depth);
  const [ topic, setTopic ] = useState(props.topic);
  const [ typeArray, setTypeArray ] = useState(MENU[type]);

  console.log(topic, depth);

  let filteredTopic = typeArray.filter(el => el.item === topic)[0];
  console.log(filteredTopic);

  return (
    <div className="submenu-container">
      {
        filteredTopic && filteredTopic.subitems && filteredTopic.subitems.map(subitem => {
          return (
            <div className="item-container">
              <Link to={subitem.route}>
                <Button variant="secondary" size="lg" className="btn-menu"> { subitem.item } </Button>
              </Link>
            </div>
          )
        }
        )
      }
    </div>
  )
};

export default MainSubMenu;
