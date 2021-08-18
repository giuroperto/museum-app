import { Button } from "react-bootstrap";
import { GoHeart } from "react-icons/go";
import './SideMenu.css';

const SideMenu = () => {

  return (
    <div className="side-menu">
        <nav className="nav-side-menu">
          <Button className="side-menu-btn">Achiropita</Button>
          <Button className="side-menu-btn">Orione</Button>
          <Button className="side-menu-btn">Bixiga</Button>
        </nav>
    </div>
  )
};

export default SideMenu;
