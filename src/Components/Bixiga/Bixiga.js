import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from '../Navbar/Navbar';
import "./Bixiga.css";

const Bixiga = () => {
  return (
    <>
      <Navbar />
      <div className="bixiga-container">
        <Link className="section-menu">Origem do Bairro</Link>
        <Link className="section-menu">Linha do Tempo</Link>
        <Link className="section-menu">Famílias</Link>
        <Link className="section-menu">Lugares Icônicos</Link>
        <Link className="section-menu">Cultura</Link>
      </div>
      <Footer />
    </>
  )
};

export default Bixiga;

// TODO change menu here to a new component and pass links by props