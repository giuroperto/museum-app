import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useEffect, useState } from "react";

import MENU from '../constants/menus';

import "./SubMenu.css";
import videoDonOrione from './centenário - vinheta PT -  AMON - orione - cc.mp4';

const MainSubMenu = (props) => {

  const [ type, setType ] = useState(props.type);
  const [ typeArray, setTypeArray ] = useState(MENU[type]);

  console.log(type, typeArray);

  return (
    <div className="submenu-container">
      {
        type && type === "ORIONE" ? (
          <>
            <video src={videoDonOrione} controls="controls" width="60%" />
            <div className="menu-block">
              {
                MENU.ORIONE.map(item => {
                  return (
                    <Link to={item.route}>
                      <Button variant="secondary" size="lg" className="btn-menu" onClick={() => props.click(1, item.item)}> { item.item } </Button>
                    </Link>
                  )
                })
              }
            </div>
          </>
        ) : (
          typeArray && typeArray.map(item => {
            return (
              <div className="item-container">
                <Link to={item.route}>
                  <Button variant="secondary" size="lg" className="btn-menu" onClick={() => props.click(1, item.item)} > { item.item } </Button>
                </Link>
              </div>
            )
          })
        )
      }
    </div>
  )
};

export default MainSubMenu;