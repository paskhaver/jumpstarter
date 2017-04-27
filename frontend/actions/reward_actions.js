import * as RewardAPIUtil from "../util/reward_api_util.js";
import { receiveErrors, clearErrors } from "./error_actions";

export const RECEIVE_REWARDS = "RECEIVE_REWARDS";
export const RECEIVE_REWARD  = "RECEIVE_REWARD";
export const REMOVE_REWARD   = "REMOVE_REWARD";

export const receiveRewards = (rewards) => {
  return {
    type: RECEIVE_REWARDS,
    rewards
  };
};

export const receiveReward = (reward) => {
  return {
    type: RECEIVE_REWARD,
    reward
  };
};

export const removeReward = (reward) => {
  return {
    type: REMOVE_REWARD,
    reward
  };
};


export const getRewardsForProject = (projectId) => (dispatch) => {
  return RewardAPIUtil.getRewardsForProject(projectId)
        .then(rewards => {
                dispatch(receiveRewards(rewards));
                return rewards;
              },
              errors  => {
                return dispatch(receiveErrors(errors));
              }
        );
};

export const updateReward = (reward) => (dispatch) => {
  return RewardAPIUtil.updateReward(reward)
                      .then(reward => {
                          return dispatch(receiveReward(reward));
                      },
                        errors => {
                          return dispatch(receiveErrors(errors));
                        }
                      );
};

export const createReward = (reward) => (dispatch) => {
  return RewardAPIUtil.createReward(reward)
                      .then(reward => {
                        return dispatch(receiveReward(reward));
                      },
                      errors => {
                        return dispatch(receiveErrors(errors));
                      });
};

export const deleteReward = (reward) => (dispatch) => {
  return RewardAPIUtil.deleteReward(reward)
                      .then(reward => {
                        dispatch(removeReward(reward));
                        return reward;
                      },
                      errors => {
                        return dispatch(receiveErrors(errors));
                      });
}
