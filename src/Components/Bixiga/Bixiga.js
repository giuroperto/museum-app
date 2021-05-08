import { Link } from "react-router-dom";
import "./Bixiga.css";

const Bixiga = () => {
  return (
    <div className="bixiga-container">
      <Link className="section-menu">Origem do Bairro</Link>
      <Link className="section-menu">Linha do Tempo</Link>
      <Link className="section-menu">Famílias</Link>
      <Link className="section-menu">Lugares Icônicos</Link>
      <Link className="section-menu">Cultura</Link>
    </div>
  )
};

export default Bixiga;

// TODO change menu here to a new component and pass links by props