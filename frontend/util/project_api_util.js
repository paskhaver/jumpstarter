// ProjectsController#index
export const fetchProjects = () => {
  return $.ajax({
    method: "GET",
    url: "/api/projects"
  });
};

// ProjectsController#show
export const fetchProject = (projectId) => {
  return $.ajax({
    method: "GET",
    url: `/api/projects/${projectId}`
  });
};

// ProjectsController#create
export const createProject = (project) => {
  return $.ajax({
    method: "POST",
    url: `/api/projects`,
    data: { project }
  });
};

// ProjectsController#update
export const updateProject = (project) => {
  return $.ajax({
    method: "PATCH",
    url: `/api/projects/${project.id}`,
    data: { project }
  });
};

// ProjectsController#destroy
export const deleteProject = (projectId) => {
  return $.ajax({
    method: "DELETE",
    url: `/api/projects/${projectId}`
  });
};
