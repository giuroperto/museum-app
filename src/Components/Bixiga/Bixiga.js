import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card } from 'react-bootstrap';

import Footer from "../Footer/Footer";
import Navbar from '../Navbar/Navbar';
import SubMenu from '../SubMenu/MainSubMenu';
import TextSubMenu from '../SubMenu/TextSubMenu';
import "./Bixiga.css";

const Bixiga = () => {
  const [ depth0, setDepth0 ] = useState(true);
  const [ depth1, setDepth1 ] = useState(false);
  const [ depth2, setDepth2 ] = useState(false);
  const [ cardType, setCardType ] = useState("");
  const [ count, setCount ] = useState(0);
  const [ topic, setTopic ] = useState("");

  const onClickSubmenu = (value, topic) => {
    setCount(Number(value));
    setTopic(topic);
    console.log(`value: ${value}`);
    console.log(`count: ${count}`);
    console.log(`topic: ${topic}`);
  };

  useEffect(() => {
    console.log("into useEffect");
    switch (count) {
      case 1:
        setDepth0(false);
        setDepth1(true);
        setDepth2(false);
        console.log("into case1");
        break;
      case 2:
        setDepth0(false);
        setDepth1(false);
        setDepth2(true);
        console.log("into case2");
        break;
      default:
        setDepth0(true);
        setDepth1(false);
        setDepth2(false);
        console.log("into default");
        break;
    }
  });

  console.log(count);
  console.log(depth0);
  console.log(depth1);
  console.log(depth2);

  return (
    <>
      <Navbar />
      <div className="bixiga-container">
      {
        depth0 && (
          <SubMenu type="BIXIGA" click={onClickSubmenu} />
        )
      }
      {
        depth1 && (cardType === "text" ? (
          <TextSubMenu type="BIXIGA" depth="1" topic={topic} />
        ) : (
          <TextSubMenu type="BIXIGA" depth="1" topic={topic} />
        ))
      }
      {/* {
        depth2 && cardType === "text" ? (
          <TextSubMenu type="BIXIGA" depth="2" topic={topic} />
        ) : (
          <TextSubMenu type="BIXIGA" depth="2" topic={topic} />
        )
      } */}
      </div>
      {/* <Footer /> */}
    </>
  )
};

export default Bixiga;

// TODO change menu here to a new component and pass links by props
