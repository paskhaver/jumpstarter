import React from "react";
import YouTube from "react-youtube";

class AboutUs extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const opts = {
        height: '390',
        width: '1080',
        playerVars: { // https://developers.google.com/youtube/player_parameters
          autoplay: 1
        }
      };

      return (
        <YouTube
          videoId="8AIwaSD9Sco"
          opts={opts}
        />
      );
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}

export default AboutUs;
