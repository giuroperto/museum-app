import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';

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
        <Link to={ROUTES.ORIONE}>
          <div className="btn-menu">
            <img className="btn-img" src="https://res.cloudinary.com/dxatyucj2/image/upload/v1620354559/museu-bixiga/p._36_ikeey2.jpg" alt="Foto de São Luís Orione"/>
            <span>SÃO LUÍS ORIONE</span>
          </div>
        </Link>
        <Link to={ROUTES.ACHIROPITA}>
        <div className="btn-menu">
          <img className="btn-img" src="https://res.cloudinary.com/dxatyucj2/image/upload/v1620354631/museu-bixiga/visita_2_ksdbec.jpg" alt="Pintura de Nossa Senhora Achiropita"/>
          <span>NOSSA SENHORA ACHIROPITA</span>
        </div>
        </Link>
        <Link to={ROUTES.BIXIGA}>
        <div className="btn-menu">
          <img className="btn-img" src="http://res.cloudinary.com/dxatyucj2/image/upload/v1620355700/museu-bixiga/igrejaachiropita_ecsw14.jpg" alt="Foto da Igreja da Achiropita no Bixiga"/>
          <span>BIXIGA</span>
        </div>
        </Link>
      </div>
    </div>
  )
};

export default Home;