import { GoHeart } from "react-icons/go";
import './Footer.css';

const Footer = () => {

  return (
    <div className="footer">
        <p>
          Desenvolvido com <GoHeart className="footer-heart" /> por <a href="http://www.bixiga.com.br/bixiga/" target="_blank" rel="noopener noreferrer" className="footer-site" >e-Roperto</a>
        </p>
    </div>
  )
};

export default Footer;
