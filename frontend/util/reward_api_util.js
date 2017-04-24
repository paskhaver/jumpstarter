export const getRewardsForProject = (projectId) => {
  return $.ajax({
    method: "GET",
    url: `/api/projects/${projectId}/rewards`
  });
};

export const createRewardForProject = (projectId, reward) => {
  return $.ajax({
    method: "POST",
    url: `/api/projects/${projectId}/rewards`,
    data: { reward }
  });
};

export const updateRewardForProject = (projectId, rewardId, reward) => {
  return $.ajax({
    method: "PATCH",
    url: `/api/projects/${projectId}/rewards`,
    data: { reward }
  });
};

export const deleteRewardFromProject = (projectId, rewardId) => {
  return $.ajax({
    method: "DELETE",
    url: `/api/projects/${projectId}/rewards/${rewardId}`
  });
};
