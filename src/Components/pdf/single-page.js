import React, { useEffect, useState } from "react";
import { Document, Page } from "react-pdf";

// import pdfFile from './FASC1.pdf';

const SinglePage = (props) => {

  const [pdfFile, setPdfFile] = useState(props.pdfFile);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1); //setting 1 to show first page

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

  return (
    <div className="pdf-view-container">
      <Document
        file={pdfFile}
        // file="https://drive.google.com/file/d/1N2vPZsnaEDS4NPktj-UzwOqF4RdO5bFh/view?usp=sharing"
        options={{ workerSrc: "/pdf.worker.js" }}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <div>
        <p>
          Page {pageNumber || (numPages ? 1 : "--")} of {numPages || "--"}
        </p>
        <button type="button" disabled={pageNumber <= 1} onClick={previousPage}>
          Previous
        </button>
        <button
          type="button"
          disabled={pageNumber >= numPages}
          onClick={nextPage}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default SinglePage;