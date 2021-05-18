import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

import TOPICS from '../constants/topics';
import CONTENT from '../constants/contentGroups';

import "./Orione.css";
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

const Orione = () => {
  return (
    <>
      <Navbar />
      <div className="orione-container">
      {
        CONTENT.map(group => {
          return (
            <Card className="text-center card-groups">
              <Card.Header className="card-title">{group}</Card.Header>
              <Card.Body>
                <Card.Text className="card-items">
                  {
                    TOPICS.ORIONE.filter(item => item.category == group).map(item => {
                      return (
                        <Link to={item.route} className="card-item-link">{item.item}</Link>
                      )
                    })
                  }
                </Card.Text>
              </Card.Body>
            </Card>
          )
        })
      }
      </div>
      <Footer />
    </>
  )
};

export default Orione;

// TODO change menu here to a new component and pass links by props

// {
//   TOPICS.ORIONE.map(topic => <Link className="section-menu" to={topic.route}>{topic.item}</Link>)
// }