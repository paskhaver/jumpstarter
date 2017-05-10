import React from "react";
import Carousel from "nuka-carousel";

class ProjectCarousel extends React.Component {

  render() {
    return (
      <Carousel className="project-carousel" autoplay={false} wrapAround={true}>

        <div className="project-carousel-slide">
          <h1>Triangle Madness</h1>
          <h2>Test h2</h2>
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
