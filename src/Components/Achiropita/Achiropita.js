import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from '../Navbar/Navbar';
import "./Achiropita.css";

const Achiropita = () => {
  return (
    <>
      <Navbar />
      <div className="achiropita-container">
        <Link className="section-menu">Origem da Devoção</Link>
        <Link className="section-menu">Linha do Tempo</Link>
        <Link className="section-menu">História da Devoção no Brasil</Link>
        <Link className="section-menu">Padres e Leigos</Link>
        <Link className="section-menu">Igrejas e Edifícios</Link>
        <Link className="section-menu">Festa da Achiropita</Link>
        <Link className="section-menu">Paróquias Pastorais</Link>
        <Link className="section-menu">Projetos</Link>
      </div>
      <Footer />
    </>
  )
};

export default Achiropita;

// TODO change menu here to a new component and pass links by props