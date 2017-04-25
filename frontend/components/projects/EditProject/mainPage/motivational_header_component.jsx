import React from "react";

class MotivationalHeader extends React.Component {

  // this.props.name
  // this.props.activeMenuItem

  constructor(props) {
    super(props);
  }

  determineHeaderText() {
    switch(this.props.activeMenuItem) {
      case "Basics":
        return "Let's get started.";

      case "Rewards":
        return "Set your rewards and shipping costs.";

      case "Story":
        return "Tell us about your project.";

      case "About you":
        return "Tell us more about yourself.";

      case "Account":
        return "Confirm your identity and link a bank account.";

      default:
        return "";
    }
  }

  determineParagraphText() {
    switch(this.props.activeMenuItem) {
      case "Basics":
        return "Make a great first impression with your project’s title andimage, and set your funding goal, campaign duration, and project category.";

      case "Rewards":
        return "Invite backers to be a part of the creative experience by offering rewards like a copy of what you’re making, a special experience, or a behind-the-scenes look into your process.";

      case "Story":
        return "Use images, video, and a compelling description to describe what you’re making. Be sure to get specific about why people should be excited about your project.";

      case "About you":
        return "Add a bio and links to your website and social media profiles. Think of it as your creative resume.";

      case "Account":
        return "Provide additional details about yourself and where funds should be sent.";

      default:
        return "";
    }
  }

  render() {

    const headerText = this.determineHeaderText();
    const paragraphText = this.determineParagraphText();

    return (
      <div className="edit-project-page-motivational-header">
        <h2>{headerText}</h2>
        <p>{paragraphText}</p>
      </div>
    );
  }
}

export default MotivationalHeader;
