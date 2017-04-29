export const fetchCategories = () => {
  return $.ajax({
    method: "GET",
    url: "/api/categories"
  });
};

export const fetchCategoryProjects = (category) => {
  debugger
  return $.ajax({
    method: "GET",
    url: `/api/categories`,
    data: { category }
  });
};
