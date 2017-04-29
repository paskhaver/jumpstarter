export const fetchCategories = () => {
  return $.ajax({
    method: "GET",
    url: "/api/categories"
  });
};

export const fetchCategoryProjects = (category) => {
  return $.ajax({
    method: "GET",
    url: `/api/categories`,
    data: `category=${category}`
  });
};
