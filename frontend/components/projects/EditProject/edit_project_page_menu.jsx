import React from "react";
import EditProjectPageMenuItem from "./edit_project_page_menu_item";

class EditProjectPageMenu extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      activeMenuItem: "Basics"
    };
    this.handleMenuItemClick = this.handleMenuItemClick.bind(this);
  }

  handleMenuItemClick(itemName) {
    this.setState({
      activeMenuItem: itemName
    });
    this.props.updateActiveMenuItem(itemName);
  }

  render() {
    return (
      <nav className="edit-project-page-menu">
        <ul className="edit-project-page-menu-ul">

          <EditProjectPageMenuItem
            name={"Basics"}
            checkIcon={true}
            handleMenuItemClick={ this.handleMenuItemClick }/>

          <EditProjectPageMenuItem
            name={"Rewards"}
            checkIcon={true}
            handleMenuItemClick={ this.handleMenuItemClick }/>

          <EditProjectPageMenuItem
            name={"Story"}
            checkIcon={true}
            handleMenuItemClick = { this.handleMenuItemClick }/>

          <EditProjectPageMenuItem
            name={"About you"}
            checkIcon={true}
            handleMenuItemClick = { this.handleMenuItemClick } />

          <EditProjectPageMenuItem
            name={"Account"}
            checkIcon={true}
            handleMenuItemClick = { this.handleMenuItemClick } />
        </ul>

        <ul className="edit-project-page-menu-ul">
          <EditProjectPageMenuItem url="preview" name={"Preview"} checkIcon={false} />
        </ul>

        <ul className="edit-project-page-menu-ul">
          <EditProjectPageMenuItem url="submit"
                                   name={"Submit for review"}
                                   checkIcon={false}
                                   bonusText={"Allow up to 3 business days"}/>
        </ul>
      </nav>
    );
  }
}

export default EditProjectPageMenu;
