import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

import MENU from '../constants/menus';

import "./SubMenu.css";

const SubMenuAchiropita = () => {
  return (
      <div className="submenu-container">
          {
            MENU.ACHIROPITA.map(item => {
              return (
                <div className="item-container">
                  <Link to={item.route}>
                    <Button variant="secondary" size="lg" className="btn-menu"> { item.item } </Button>
                  </Link>
                  {
                    item.subitems && item.subitems.map(subitem => {
                      return (
                        <p>{subitem.item}</p>
                      )
                    })
                  }
                </div>
              )
            })
          }
      </div>
  )
};

export default SubMenuAchiropita;

{
  MENU.BIXIGA.map(item => {
    return (
      <div className="item-container">
        <Link to={item.route}>
          <Button variant="secondary" size="lg"> { item.item } </Button>
        </Link>
        {
          item.subitems && item.subitems.map(subitem => {
            return (
              <p>{subitem.item}</p>
            )
          })
        }
      </div>
      
    )
  })
}
