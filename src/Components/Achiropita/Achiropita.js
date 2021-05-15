import { Link } from "react-router-dom";

import TOPICS from "../constants/topics";

import Footer from "../Footer/Footer";
import Navbar from '../Navbar/Navbar';
import "./Achiropita.css";

const Achiropita = () => {

  return (
    <>
      <Navbar />
      <div className="achiropita-container">
      {
        TOPICS.ACHIROPITA.map(topic => <Link className="section-menu" to={topic.route}>{topic.item}</Link>)
      }
      </div>
      <Footer />
    </>
  )
};

export default Achiropita;

// TODO change menu here to a new component and pass links by props