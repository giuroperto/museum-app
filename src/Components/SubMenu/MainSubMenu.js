import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useEffect, useState } from "react";

import "./SubMenu.css";
import videoDonOrione from './centenário - vinheta PT -  AMON - orione - cc.mp4';

const MainSubMenu = (props) => {

  const [ menuArray, setMenuArray ] = useState(props.array);

  useEffect(() => {
    setMenuArray(props.array);
  }, [props]);

  return (
    <div className="submenu-container">
      {
        menuArray.length > 0 && menuArray.map(item => {
          return (
            <div className="item-container" key={`${item.item}-${item.route}`}>
              <Link to={item.route}>
                <Button variant="secondary" size="lg" className="btn-menu" onClick={() => props.click(item.item)} > { item.item } </Button>
              </Link>
            </div>
          )
        })
      }
    </div>
  )
};

export default MainSubMenu;


// type && type === "ORIONE" ? (
//   <>
//     <video src={videoDonOrione} controls="controls" width="60%" />
//     <div className="menu-block">
//       {
//         MENU.ORIONE.map(item => {
//           return (
//             <Link to={item.route}>
//               <Button variant="secondary" size="lg" className="btn-menu" onClick={() => props.click(1, item.item)}> { item.item } </Button>
//             </Link>
//           )
//         })
//       }
//     </div>
//   </>
// ) : (
  // )