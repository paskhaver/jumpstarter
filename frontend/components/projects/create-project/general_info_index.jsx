import React from "react";
import GeneralInfoItem from "./general_info_item";

function GeneralInfoIndex() {
  return(
    <div className="general-info">

      <GeneralInfoItem title="Log In"
                       description="Log in to your Jumpstarter account to create a brand new project"
                       link="/login"
                       buttonText="Log In"/>

      <GeneralInfoItem title="Find A Project"
                       description="Use our search feature to dynamically locate a project"
                       link="/search"
                       buttonText="Search"/>

      <GeneralInfoItem title="Explore"
                      description="See all that Jumpstarter has to offer"
                      link="/explore"
                      buttonText={"Categories"}/>

    </div>
  );
}

export default GeneralInfoIndex;
