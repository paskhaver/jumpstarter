import { UPDATE_ACTIVE_MENU_ITEM } from "../actions/menu_actions";

const MenuReducer = (state = "", action) => {
  switch(action.type) {
    case UPDATE_ACTIVE_MENU_ITEM:
      return action.item;

    default:
      return state;
  }
};

export default MenuReducer;
