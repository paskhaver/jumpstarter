import { RECEIVE_REWARDS, RECEIVE_REWARD, REMOVE_REWARD } from "./../actions/reward_actions";
import { RECEIVE_PLEDGE } from "./../actions/pledge_actions";
import { merge, cloneDeep } from "lodash";

const RewardsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState, reward, reward_id, selectedReward;

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

    case RECEIVE_PLEDGE:
      newState = cloneDeep(state);
      reward_id = action.pledge.reward_id;
      selectedReward = newState.find(rewardEl => {
        return rewardEl.id === reward_id;
      });
      selectedReward.pledge_count += 1;
      return newState;

    default:
      return state;
  }
};

export default RewardsReducer;
