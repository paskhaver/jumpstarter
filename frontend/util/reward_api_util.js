export const getRewardsForProject = (projectId) => {
  return $.ajax({
    method: "GET",
    url: `/api/projects/${projectId}/rewards`
  });
};
