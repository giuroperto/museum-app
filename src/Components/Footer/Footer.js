import { GoHeart } from "react-icons/go";
import './Footer.css';

const Footer = () => {

  return (
    <div className="footer">
        <p>
          Criado com <GoHeart className="footer-heart" /> por <a href="www.bixiga.com.br" target="_blank" rel="noopener noreferrer" className="footer-site" >E-Roperto</a>.
        </p>
    </div>
  )
};

export default Footer;