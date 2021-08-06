import { useEffect, useState } from "react";

import "./Pages.css";

const VideoPage = (props) => {

  const [ content, setContent ] = useState(props.content);

  useEffect(() => {
    setContent(props.content);
  }, [props]);

  return (
    <div className="page-container">
      <div className="video-container">
      {
        Object.keys(content).length > 0 && (
          <>
            <h2 className="video-page-title"> {content.title} </h2>
            <iframe 
              src={content.text}
              allowFullScreen
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              title={content.title}
              className="iframe-video">
              </iframe>
          </>
        )
      }
      </div>
    </div>
  )
};

export default VideoPage;
