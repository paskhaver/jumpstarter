export const createPledge = pledge => {
  const projectId = pledge.project_id;
  delete pledge.project_id;

  return $.ajax({
    method: "POST",
    url: `/api/projects/${projectId}/pledges`,
    data: { pledge }
  });
};
