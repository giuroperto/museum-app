import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useEffect, useState } from "react";

import MENU from '../constants/menus';

import "./SubMenu.css";

const MainSubMenu = (props) => {

  const [ type, setType ] = useState(props.type);
  const [ typeArray, setTypeArray ] = useState(MENU[type]);

  console.log(type, typeArray);

  return (
    <div className="submenu-container">
      {
        typeArray && typeArray.map(item => {
          return (
            <div className="item-container">
              <Link to={item.route}>
                <Button variant="secondary" size="lg" className="btn-menu"> { item.item } </Button>
              </Link>
              {
                item.subitems && item.subitems.map(subitem => {
                  return (
                    <p>{subitem.item}</p>
                  )
                })
              }
            </div>
          )
        })
      }
    </div>
  )
};

export default MainSubMenu;