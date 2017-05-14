import React from "react";
import Carousel from "nuka-carousel";

class ProjectCarousel extends React.Component {

  render() {
    return (
      <Carousel className="project-carousel"
                autoplay={true}
                autoplayInterval={3000}
                wrapAround={true}>

        <div className="project-carousel-slide">
          <h1>Dice Dice Baby</h1>
          <h2>An incredible new board game from the creator of the ShamWow</h2>
          <button>View project</button>
          <img src={window.images.carousel_dice} />
        </div>

        <div className="project-carousel-slide">
          <h1>New Horror Movie</h1>
          <h2>Guaranteed to scare the kids away</h2>
          <button>View project</button>
          <img src={window.images.carousel_kids_running} />
        </div>

        <div className="project-carousel-slide">
          <h1>Tomcar</h1>
          <h2>Get around in style (and utility) with the Tomcar</h2>
          <button>View project</button>
          <img src={window.images.carousel_tomcar} />
        </div>

      </Carousel>
    );
  }

}

export default ProjectCarousel;
