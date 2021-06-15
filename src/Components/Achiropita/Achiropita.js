import { Link } from "react-router-dom";
import { Card } from 'react-bootstrap';

import TOPICS from "../constants/topics";

import Footer from "../Footer/Footer";
import Navbar from '../Navbar/Navbar';
import SubMenu from '../SubMenu/MainSubMenu';
import "./Achiropita.css";

const Achiropita = () => {

  return (
    <>
      <Navbar />
      <div className="achiropita-container">
        <SubMenu type="ACHIROPITA" />
      </div>
      {/* <Footer /> */}
    </>
  )
};

export default Achiropita;

// TODO change menu here to a new component and pass links by props
