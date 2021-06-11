import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

import MENU from '../constants/menus';

import "./Orione.css";
import Navbar from '../Navbar/Navbar';

const SubMenu = () => {



  return (
    <>
      <Navbar />
      <div className="submenu-container">
        <div className="menu-block">
          {
            MENU.ORIONE.map(item => {
              return (
                <Link to={item.route}>
                  <Button variant="secondary" size="lg"> { item.item } </Button>
                </Link>
                
              )
            })
          }
        </div>
      </div>
    </>
  )
};

export default SubMenu;