import * as RewardAPIUtil from "../util/reward_api_util.js";
import { receiveErrors, clearErrors } from "./error_actions";

export const RECEIVE_REWARDS = "RECEIVE_REWARDS";

export const receiveRewards = (rewards) => {
  return {
    type: RECEIVE_REWARDS,
    rewards
  };
};


export const getRewardsForProject = (projectId) => (dispatch) => {
  return RewardAPIUtil.getRewardsForProject(projectId)
        .then(rewards => {
           dispatch(receiveRewards(rewards));
           return rewards;
         },
              errors  => { return dispatch(receiveErrors(errors)); }
        );
};
