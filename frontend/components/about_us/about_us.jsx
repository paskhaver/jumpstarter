import React from "react";
import YouTube from "react-youtube";

class AboutUs extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const opts = {
        height: '390',
        width: '100%',
        playerVars: { // https://developers.google.com/youtube/player_parameters
          autoplay: 1
        }
      };

      return (
        <YouTube
          videoId="RB4Ht70-XcY"
          onEnd={event => { event.target.playVideo(); }}
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
