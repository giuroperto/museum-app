import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CardDeck, Card } from 'react-bootstrap';

import './Home.css';

import ROUTES from '../constants/routes';

// --------------------------------


const Home = () => {


  const [ loader , setLoader ] = useState(true);

  // --------------------------------

  useEffect(() => {
    setLoader(false);
  }, []);

  return (
    <div className="home-container">
      <h1 className="app-title">MUSEU DO BIXIGA</h1>
      <div className="btn-container">
        <CardDeck className="card-deck">
          <Card>
            <Card.Img variant="top" src="https://res.cloudinary.com/dxatyucj2/image/upload/v1620871539/museu-bixiga/p._36_ikeey2.jpg" />
            <Card.Body>
              <Card.Title>SÃO LUÍS ORIONE</Card.Title>
              <Card.Text className="card-text">
                This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.{' '}
                <Link to={ROUTES.ORIONE}>SAIBA MAIS
                </Link>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src="https://res.cloudinary.com/dxatyucj2/image/upload/v1620871500/museu-bixiga/visita_2_ksdbec.jpg" />
            <Card.Body>
              <Card.Title>NOSSA SENHORA ACHIROPITA</Card.Title>
              <Card.Text className="card-text">
                This card has supporting text below as a natural lead-in to additional content.{' '}
                <Link to={ROUTES.ACHIROPITA}>SAIBA MAIS
                </Link>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src="https://res.cloudinary.com/dxatyucj2/image/upload/v1620871689/museu-bixiga/igrejaachiropita_ecsw14.jpg" />
            <Card.Body>
              <Card.Title>BIXIGA</Card.Title>
              <Card.Text className="card-text">
                This is a wider card with supporting text below as a natural lead-in to additional content.{' '}
                <Link to={ROUTES.BIXIGA}>SAIBA MAIS
                </Link>
              </Card.Text>
            </Card.Body>
          </Card>
        </CardDeck>
      </div>
{/* 
          <div className="btn-menu">
          </div>
        <div className="btn-menu">
        </div>
        <div className="btn-menu">
        </div> */}
    </div>
  )
};

export default Home;