// UsersController#index
export const fetchUsers = () => {
  return $.ajax({
    method: "GET",
    url: "/api/users"
  });
};

// UsersController#show
export const fetchUser = (userId) => {
  return $.ajax({
    method: "GET",
    url: `/api/users/userId`
  });
};

// UsersController#create
export const createUser = (user) => {
  return $.ajax({
    method: "POST",
    url: `/api/users`,
    data: { user }
  });
};

// UsersController#update
export const updateUser = (user) => {
  return $.ajax({
    method: "PATCH",
    url: `/api/users/${user.id}`,
    data: { user }
  });
};

// UsersController#destroy
export const deleteUser = (userId) => {
  return $.ajax({
    method: "DELETE",
    url: `/api/users/${userId}`
  });
};
