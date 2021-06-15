import { Link } from "react-router-dom";
import { Card } from 'react-bootstrap';

import Footer from "../Footer/Footer";
import Navbar from '../Navbar/Navbar';
import SubMenu from '../SubMenu/MainSubMenu';
import "./Bixiga.css";

const Bixiga = () => {
  return (
    <>
      <Navbar />
      <div className="bixiga-container">
        <SubMenu type="BIXIGA" />
      </div>
      {/* <Footer /> */}
    </>
  )
};

export default Bixiga;

// TODO change menu here to a new component and pass links by props
