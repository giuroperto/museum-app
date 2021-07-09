import React, { useEffect, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

import './single-page.css';

import FASC1 from './FASC1.pdf';

const SinglePage = (props) => {

  const [pdfFile, setPdfFile] = useState(props.pdfFile);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1); //setting 1 to show first page

  useEffect(() => {
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  })

  useEffect(() => {
    setPdfFile(props.pdfFile);
  });

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setPageNumber(1);
  };

  const changePage = (offset) => {
    setPageNumber(prevPageNumber => prevPageNumber + offset);
  };

  const previousPage = () => {
    changePage(-1);
  };

  const nextPage = () => {
    changePage(1);
  };

  console.log(pdfFile);
  // console.log(FASC1);

  return (
    <div className="pdf-view-container">
      <Document
      // file={pdfFile}
      file={FASC1}
      onLoadSuccess={onDocumentLoadSuccess} 
      className="pdf-document">
        <Page pageNumber={pageNumber} 
          className="pdf-page"
        />
      </Document>
      <div className="pdf-page-control">
        <p className="pdf-page-text">
          Page {pageNumber || (numPages ? 1 : "--")} of {numPages || "--"}
        </p>
        <div className="btn-control-container">
          <button
            className="pdf-btn"
            type="button"
            disabled={pageNumber <= 1}
            onClick={previousPage}>
            Anterior
          </button>
          <button
            className="pdf-btn"
            type="button"
            disabled={pageNumber >= numPages}
            onClick={nextPage}>
            Próxima
          </button>
        </div>
      </div>
    </div>
  );
}

export default SinglePage;

// file="https://drive.google.com/file/d/1N2vPZsnaEDS4NPktj-UzwOqF4RdO5bFh/view?usp=sharing"
        // options={{ workerSrc: "/pdf.worker.js" }}