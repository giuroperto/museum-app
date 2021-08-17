import { useEffect, useState } from "react";

import "./Pages.css";

const TextPage = (props) => {

  const [ content, setContent ] = useState(props.content);

  useEffect(() => {
    setContent(props.content);
  }, [props]);

  console.log('content text page', content);
  console.log('content.images text page', content.images);
  console.log('content.video text page', content.video);

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
      {
        Object.keys(content).length > 0 && content.video && (
          <iframe 
            src={content.video}
            allowFullScreen
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            title={content.title}
            className="text-page-video">
          </iframe>
        )
      }
      </div>
    </div>
  )
};

export default TextPage;
