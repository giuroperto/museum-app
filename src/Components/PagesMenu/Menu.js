import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

import MENU from '../constants/menus';

import "./Menu.css";
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

const Menu = () => {
  return (
    <>
      <Navbar />
      <div className="menu-container">
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
      <Footer />
    </>
  )
};

export default Menu;