import { RECEIVE_REWARDS } from "./../actions/reward_actions";
import { merge } from "lodash";

const RewardsReducer = (state = [], action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_REWARDS:
      return state.concat(action.rewards);

    default:
      return state;
  }
};

export default RewardsReducer;
