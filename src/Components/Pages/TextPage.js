import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useEffect, useState } from "react";

import "./Pages.css";

const TextPage = (props) => {

  const [ content, setContent ] = useState(props.content);

  useEffect(() => {
    setContent(props.content);
  }, [props]);

  console.log(content);
  console.log(content.images);

  return (
    <div className="page-container">
      <div className="item-container">
      {
        Object.keys(content).length > 0 && (
          <>
            <h2 className="page-title"> {content.title} </h2>
            <p className="page-text"> {content.text} </p>
          </>
        )
      }
      {
        Object.keys(content).length > 0 && content.images && content.images.map(image => {
          return (
            <img src={image} alt="Curadoria do Museu" className="page-image"/>
          )
        }) 
      }
      </div>
    </div>
  )
};

export default TextPage;
