import React from "react";
import Slider from "react-slick";
import { Link } from "react-router";

class SimpleSlider extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1
    };

    const { results } = this.props;

    const projectsArray = Object.keys(results);
    const projectItems = projectsArray.map(projectId => {
      const project = results[projectId];
      return (<div key={projectId}>
        <h3>
            <Link to={`/projects/${projectId}`}>{project.title}
            </Link>
        </h3>
        <p>{project.blurb}</p>
      </div>);
    });

    return (
      <Slider {...settings}>
        {projectItems}
      </Slider>
    );
  }
}

export default SimpleSlider;
