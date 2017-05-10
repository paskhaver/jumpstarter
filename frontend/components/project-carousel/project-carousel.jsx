import React from "react";
import Carousel from "nuka-carousel";

class ProjectCarousel extends React.Component {

  render() {
    return (
      <Carousel className="project-carousel" autoplay={true} wrapAround={true}>

        <div className="project-carousel-slide">
          <h1>Slide 1</h1>
          <img src={window.images.carousel_triangle_bg} />
        </div>

        <img src={window.images.carousel_dice} />
        <img src={window.images.carousel_kids_running} />
        <img src={window.images.carousel_telemarketers} />
        <img src={window.images.carousel_tomcar} />
        <img src={window.images.carousel_wolves} />

      </Carousel>
    );
  }

}

export default ProjectCarousel;
