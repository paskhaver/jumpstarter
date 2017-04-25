import { RECEIVE_REWARDS } from "./../actions/reward_actions";

const RewardsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_REWARDS:
      return;

    default:
      return;
  }
};

export default RewardsReducer;
