export const getRewardsForProject = (projectId) => {
  return $.ajax({
    method: "GET",
    url: `/api/projects/${projectId}/rewards`
  });
};

export const createReward = (reward) => {
  const projectId = reward.project.id;
  return $.ajax({
    method: "POST",
    url: `/api/projects/${projectId}/rewards`,
    data: { reward }
  });
};

export const updateReward = (reward) => {
  const projectId = reward.project.id;
  return $.ajax({
    method: "PATCH",
    url: `/api/projects/${projectId}/rewards`,
    data: { reward }
  });
};

export const deleteRewardFromProject = (reward) => {
  const projectId = reward.project.id;
  return $.ajax({
    method: "DELETE",
    url: `/api/projects/${projectId}/rewards/${reward.id}`
  });
};
