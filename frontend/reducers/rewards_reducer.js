import { RECEIVE_REWARDS, RECEIVE_REWARD, REMOVE_REWARD } from "./../actions/reward_actions";
// import { RECEIVE_PLEDGE } from "./../actions/pledge_actions";
import { merge } from "lodash";

const RewardsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState, reward, selectedReward;

  switch(action.type) {

    case RECEIVE_REWARDS:
      return action.rewards;

    case RECEIVE_REWARD:
      newState = merge({}, state);
      reward = action.reward;
      newState[reward.id] = reward;
      return newState;

    case REMOVE_REWARD:
      newState = merge({}, state);
      reward = action.reward;
      delete newState[reward.id];
      return newState;

    default:
      return state;
  }
};

export default RewardsReducer;
