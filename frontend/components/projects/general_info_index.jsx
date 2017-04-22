import React from "react";
import GeneralInfoItem from "./general_info_item";

class GeneralInfoIndex extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="general-info">

        <GeneralInfoItem title="Creator Handbook"
                        description="We're all capable of making
                        incredible things. A few tips to get started."
                        buttonText="Jump in"/>

        <GeneralInfoItem title="Our Rules"
                        description="We have three basic principles that
                        every project on Jumpstarter should follow."
                        buttonText="Read"/>

        <GeneralInfoItem title="FAQ"
                        description="Have a question about starting a p
                        roject? We're here to help."
                        buttonText={"Learn more"}/>
                      
      </div>
    );
  }

}

export default GeneralInfoIndex;
