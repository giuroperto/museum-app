import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CardDeck, Card } from 'react-bootstrap';

import './Home.css';

import ROUTES from '../constants/routes';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

// --------------------------------


const Home = (props) => {

  const PAGE = "HOME";

  const [ loader , setLoader ] = useState(true);

  // --------------------------------

  useEffect(() => {
    setLoader(false);
  }, []);

  return (
    <>
      <Navbar page={PAGE} getHistory={props.getHistory} />
      <div className="home-container">
        <div className="cards-container">
          <CardDeck className="card-deck">
            <Card className="card-content">
              <Card.Img className="card-img" variant="top" src="https://res.cloudinary.com/dxatyucj2/image/upload/c_scale,h_209/v1620871500/museu-bixiga/visita_2_ksdbec.jpg" />
              <Card.Body>
                <Card.Title className="card-title">NOSSA SENHORA ACHIROPITA</Card.Title>
                <Card.Text className="card-text">
                  <p>A origem mística dessa devoção à Madonna Achiropita foi trazida ao Brasil pelos imigrantes italianos, e consolidou uma das paróquias mais ativas de São Paulo, em apostolado e obras sociais.</p>
                  <p> Conheça mais sobre nós!{' '}</p>
                  <Link to={ROUTES.ACHIROPITA} className="card-link">SAIBA MAIS</Link>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="card-content">
              <Card.Img className="card-img" variant="top" src="https://res.cloudinary.com/dxatyucj2/image/upload/v1623369641/museu-bixiga/centena%CC%81rio_-_logo_collor_-_1_d_NANCI_m1hwts.png" />
              <Card.Body>
                <Card.Title className="card-title">SÃO LUÍS ORIONE</Card.Title>
                <Card.Text className="card-text">
                  <p>“A caridade simpatiza com os defeitos dos outros: é iluminada e prudente”.{' '}</p>
                  <p>Conheça sobre a vida e obra de Don Orione...</p>
                  <Link to={ROUTES.ORIONE} className="card-link">SAIBA MAIS</Link>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="card-content">
              <Card.Img className="card-img" variant="top" src="https://res.cloudinary.com/dxatyucj2/image/upload/c_scale,h_204/v1620871689/museu-bixiga/igrejaachiropita_ecsw14.jpg" />
              <Card.Body>
                <Card.Title className="card-title">BIXIGA</Card.Title>
                <Card.Text className="card-text">
                  <p>Um território especial desde seus primórdios, com a ocupação caracterizada por uma diversidade étnica e cultural, tornam o Bixiga uma localidade especial na Metrópole. Contraditória como pólo de riqueza e pobreza, no Bixiga, sob a devoção mariana, foi cultivada a Paróquia da Achiropita.</p>
                  <p>Conheça aspectos de nosso bairro.{' '}</p>
                  <Link to={ROUTES.BIXIGA} className="card-link">SAIBA MAIS</Link>
                </Card.Text>
              </Card.Body>
            </Card>
          </CardDeck>
        </div>
      </div>
      <Footer />
    </>
  )
};

export default Home;