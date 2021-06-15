import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

import MENU from '../constants/menus';

import "./SubMenu.css";
import Navbar from '../Navbar/Navbar';
import videoDonOrione from './centenário - vinheta PT -  AMON - orione - cc.mp4';

const SubMenu = () => {

  return (
    <div className="submenu-container">
      <video src={videoDonOrione} controls="controls" width="60%" />
      <div className="menu-block">
        {
          MENU.ORIONE.map(item => {
            return (
              <Link to={item.route}>
                <Button variant="secondary" size="lg" className="btn-menu"> { item.item } </Button>
              </Link>
              
            )
          })
        }
      </div>
    </div>
  )
};

export default SubMenu;