export const getRewardsForProject = (projectId) => {
  return $.ajax({
    method: "GET",
    url: `/api/projects/${projectId}/rewards`
  });
};

export const updateReward = (reward) => {
  const projectId = reward.project_id;
  const rewardId  = reward.id;
  delete reward.project_id;
  delete reward.id;
  return $.ajax({
    method: "PATCH",
    url: `/api/projects/${projectId}/rewards/${rewardId}`,
    data: { reward }
  });
};
