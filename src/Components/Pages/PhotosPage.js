import { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";

import "./Pages.css";

const PhotosPage = (props) => {

  const [ content, setContent ] = useState(props.content);
  const [ index, setIndex ] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    setContent(props.content);
  }, [props]);

  return (
    <div className="page-container">
      <div className="photo-page-container">
        <Carousel activeIndex={index} onSelect={handleSelect} className="carousel-container">
        {
          Object.keys(content).length > 0 && content.images.length > 0 && content.images.map((photo) => {
            return (
              <Carousel.Item key={photo}>
                <img
                className="d-block img-format"
                src={photo} 
                alt="Fotos sobre o tema"
                />
              </Carousel.Item>
          )
          }) 
        }
        </Carousel>
      </div>
    </div>
  )
};

export default PhotosPage;
