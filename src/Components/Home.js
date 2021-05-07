import React, { useState, useEffect, useContext } from 'react';
// import { RiTimeLine, RiWhatsappLine } from "react-icons/ri";
// import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";
// import Spinner from "react-spinkit";

// import '../css/Home.css';
// import { DeliveryContext } from './Contexts';

// --------------------------------


const Home = () => {

  // const deliveryInfo = useContext(DeliveryContext);

  const [ loader , setLoader ] = useState(true);

  // --------------------------------

  useEffect(() => {
    setLoader(false);
  }, []);

  // const open = deliveryInfo.isOpen;

  return (
    <div className="home-container">
      HOME
    </div>
  )
};

export default Home;