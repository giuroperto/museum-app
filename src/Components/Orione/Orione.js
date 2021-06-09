import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

import MENU from '../constants/menus';

import "./Orione.css";
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

const Orione = () => {
  return (
    <>
      <Navbar />
      <div className="orione-container">
        <div className="picture-background"></div>
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
      {/* <Footer /> */}
    </>
  )
};

export default Orione;

// TODO change menu here to a new component and pass links by props

