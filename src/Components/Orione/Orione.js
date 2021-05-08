import { Link } from "react-router-dom";
import "./Orione.css";

const Orione = () => {
  return (
    <div className="orione-container">
      <Link className="section-menu">História</Link>
      <Link className="section-menu">Obras</Link>
      <Link className="section-menu">Centenário</Link>
      <Link className="section-menu">Escritos</Link>
      <Link className="section-menu">Biografias</Link>
      <Link className="section-menu">Evolução no Brasil</Link>
    </div>
  )
};

export default Orione;

// TODO change menu here to a new component and pass links by props