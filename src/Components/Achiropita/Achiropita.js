import { Link } from "react-router-dom";
import { Card } from 'react-bootstrap';

import TOPICS from "../constants/topics";

import Footer from "../Footer/Footer";
import Navbar from '../Navbar/Navbar';
import SubMenu from '../SubMenu/SubMenuAchiropita';
import "./Achiropita.css";

const Achiropita = () => {

  return (
    <>
      <Navbar />
      <div className="achiropita-container">
        <SubMenu />
          {/* {
            CONTENT.map(group => {
              return (
                <Card className="text-center card-groups">
                  <Card.Header className="card-title">{group}</Card.Header>
                  <Card.Body>
                    <Card.Text className="card-items">
                      {
                        TOPICS.ACHIROPITA.filter(item => item.category == group).map(item => {
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
          } */}
      </div>
      {/* <Footer /> */}
    </>
  )
};

export default Achiropita;

// TODO change menu here to a new component and pass links by props
