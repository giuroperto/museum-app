import { Link } from "react-router-dom";
import { Card } from 'react-bootstrap';

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
        TOPICS.ACHIROPITA.map(topic => {
          return (
            <Card className="text-center section-card">
              <Card.Body>
                <Card.Title>
                  <Link className="section-menu" to={topic.route}>{topic.item}</Link>
                  </Card.Title>
              </Card.Body>
              <Card.Footer className="text-muted">{topic.resources}</Card.Footer>
            </Card>
            )
          })
      }
      </div>
      <Footer />
    </>
  )
};

export default Achiropita;

// TODO change menu here to a new component and pass links by props