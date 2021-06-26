import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card } from 'react-bootstrap';

import Footer from "../Footer/Footer";
import Navbar from '../Navbar/Navbar';
import SubMenu from '../SubMenu/MainSubMenu';
import { HistoryContext } from '../../Utils/Context';
import MENU from '../constants/menus';
import "./Achiropita.css";

const Achiropita = (props) => {

  const PAGE = "ACHIROPITA";

  const [ topic, setTopic ] = useState([PAGE]);
  const [ filteredArray, setFilteredArray ] = useState(MENU[PAGE]);
  const [ type, setType ] = useState("menu");

  const onClickSubmenu = (newTopic) => {
    console.log(`new topic: ${newTopic}`);
    fetchArray(newTopic);
    filteredArray.map(e => console.log(e.item))
    setTopic([...topic, newTopic]);
  };

  console.log(filteredArray);
  console.log(topic);
  
  const fetchArray = (newTopic) => {
    let newArray = filteredArray.filter(el => el.item === newTopic)[0];
    if (newArray.subitems && newArray.subitems.length > 0) {
      setFilteredArray(newArray.subitems);
      setType("menu");
    } else {
      setFilteredArray([]);
      setType("page");
    }
  };

  console.log(type);

  return (
    <>
      <Navbar page={PAGE} />
      {
        type === "menu" && filteredArray.length > 0 && (
          <div className="achiropita-container">
            <SubMenu click={onClickSubmenu} array={filteredArray} />
          </div>
        )
      }
      {
        type === "page" && filteredArray.length > 0 && (
          <div className="achiropita-container">
            <SubMenu click={onClickSubmenu} array={filteredArray} />
          </div>
        )
      }
    </>
  )
};

export default Achiropita;
