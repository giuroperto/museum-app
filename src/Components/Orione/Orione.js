import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

import MENU from '../constants/menus';

import "./Orione.css";
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import SubMenu from '../SubMenu/SubMenuOrione';
import videoDonOrione from './centenário - vinheta PT -  AMON - orione - cc.mp4';
// import videoDonOrione from '%PUBLIC_URL%/assets/centenário - vinheta PT -  AMON - orione - cc.mp4';

const Orione = () => {
  return (
    <>
      <Navbar />
      <div className="orione-container">
        <SubMenu />
        {/* <div className="picture-background"></div> */}
        {/* <video src={videoDonOrione} controls="controls" width="60%"/>
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
        </div> */}
      </div>
      {/* <Footer /> */}
    </>
  )
};

export default Orione;

// TODO change menu here to a new component and pass links by props

