import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

import MENU from '../constants/menus';

import "./SubMenu.css";
import Navbar from '../Navbar/Navbar';

const SubMenu = () => {

  return (
    <div className="submenu-container">
      {
        MENU.BIXIGA.map(item => {
          return (
            <div className="item-container">
              <Link to={item.route}>
                <Button variant="secondary" size="lg"> { item.item } </Button>
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

export default SubMenu;