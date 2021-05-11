import { Link } from "react-router-dom";
import "./Orione.css";
import Footer from '../Footer/Footer';

const Orione = () => {
  return (
    <>
      <div className="orione-container">
        <Link className="section-menu">
          <div className="section-title">
          História
          </div>
        </Link>
        <Link className="section-menu">
          <div className="section-title">
          Obras
          </div>
        </Link>
        <Link className="section-menu">
          <div className="section-title">
          Centenário
          </div>
        </Link>
        <Link className="section-menu">
          <div className="section-title">
          Escritos
          </div>
        </Link>
        <Link className="section-menu">
          <div className="section-title">
          Biografias
          </div>
        </Link>
        <Link className="section-menu">
          <div className="section-title">
          Evolução no Brasil
          </div>
        </Link>
      </div>
      <Footer />
    </>
  )
};

export default Orione;

// TODO change menu here to a new component and pass links by props