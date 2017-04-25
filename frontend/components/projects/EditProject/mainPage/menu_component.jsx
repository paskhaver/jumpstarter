import React from "react";
import MenuItem from "./menu_item";

class Menu extends React.Component {

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

          <MenuItem
            name={"Basics"}
            checkIcon={true}
            handleMenuItemClick={ this.handleMenuItemClick }/>

          <MenuItem
            name={"Rewards"}
            checkIcon={true}
            handleMenuItemClick={ this.handleMenuItemClick }/>

          <MenuItem
            name={"Story"}
            checkIcon={true}
            handleMenuItemClick = { this.handleMenuItemClick }/>

          <MenuItem
            name={"About you"}
            checkIcon={true}
            handleMenuItemClick = { this.handleMenuItemClick } />

          <MenuItem
            name={"Account"}
            checkIcon={true}
            handleMenuItemClick = { this.handleMenuItemClick } />
        </ul>

        <ul className="edit-project-page-menu-ul">
          <MenuItem url="preview" name={"Preview"} checkIcon={false} />
        </ul>

        <ul className="edit-project-page-menu-ul">
          <MenuItem url="submit"
                                   name={"Submit for review"}
                                   checkIcon={false}
                                   bonusText={"Allow up to 3 business days"}/>
        </ul>
      </nav>
    );
  }
}

export default Menu;
