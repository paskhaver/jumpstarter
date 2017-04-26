import { RECEIVE_REWARDS, RECEIVE_REWARD } from "./../actions/reward_actions";
import { merge } from "lodash";

const RewardsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState, reward;

  switch(action.type) {

    case RECEIVE_REWARDS:
      return action.rewards;

    case RECEIVE_REWARD:
      newState = merge({}, state);
      reward = action.reward;
      newState[reward.id] = reward;
      debugger
      return newState;

    default:
      return state;
  }
};

export default RewardsReducer;
