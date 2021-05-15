import { Link } from "react-router-dom";

import TOPICS from '../constants/topics';

import "./Orione.css";
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

const Orione = () => {
  return (
    <>
      <Navbar />
      <div className="orione-container">
      {
        TOPICS.ORIONE.map(topic => <Link className="section-menu" to={topic.route}>{topic.item}</Link>)
      }
      </div>
      <Footer />
    </>
  )
};

export default Orione;

// TODO change menu here to a new component and pass links by props