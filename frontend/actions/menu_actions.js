export const UPDATE_ACTIVE_MENU_ITEM = "UPDATE_ACTIVE_MENU_ITEM";

export const updateActiveMenuItem = (item) => {
  return {
    type: UPDATE_ACTIVE_MENU_ITEM,
    item
  };
};
