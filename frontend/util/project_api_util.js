// VALIDATED
// ProjectsController#index
export const fetchProjects = () => {
  return $.ajax({
    method: "GET",
    url: "/api/projects"
  });
};

// VALIDATED
// ProjectsController#show
export const fetchProject = (projectId) => {
  return $.ajax({
    method: "GET",
    url: `/api/projects/${projectId}`
  });
};

// VALIDATED
// ProjectsController#create
export const createProject = (project) => {
  return $.ajax({
    method: "POST",
    url: `/api/projects`,
    data: { project }
  });
};

// VALIDATED
// ProjectsController#update
export const updateProject = (project) => {
  return $.ajax({
    method: "PATCH",
    url: `/api/projects/${project.id}`,
    data: { project }
  });
};

// VALIDATED
// ProjectsController#destroy
export const deleteProject = (projectId) => {
  return $.ajax({
    method: "DELETE",
    url: `/api/projects/${projectId}`
  });
};
