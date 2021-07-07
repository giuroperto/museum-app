import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { Document, Page } from 'react-pdf';
import { useState } from "react";

import "./ObrasTxt.css";
import Footer from '../../Footer/Footer';
import Navbar from '../../Navbar/Navbar';
// import pdf from '../../pdf/assets/FASC1.pdf';
import SinglePage from '../../../Utils/Components/pdf/single-page';

const ObrasTxt = (props) => {

  return (
    <>
      <Navbar />
      <div className="obras-txt-container">
        {/* <PdfView className="pdf-view" pdf={pdf} /> */}
        <SinglePage />
      </div>
      {/* <Footer /> */}
    </>
  )
};

export default ObrasTxt;

// TODO change menu here to a new component and pass links by props
