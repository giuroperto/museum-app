import { useEffect, useState } from "react";

import PDF from '../../Utils/Components/pdf/single-page';
import "./Pages.css";

const PdfPage = (props) => {

  const [ content, setContent ] = useState(props.content);

  useEffect(() => {
    setContent(props.content);
  }, [props]);

  console.log(content);

  return (
    <div className="page-container">
      <div className="pdf-container">
      {
        Object.keys(content).length > 0 && (
          <>
            <h2 className="pdf-page-title"> {content.title} </h2>
            <PDF pdfFile={content.text} />
          </>
        )
      }
      </div>
    </div>
  )
};

export default PdfPage;
