export const fetchUser = (id) => {
  return $.ajax({
    method: "GET",
    url: `/api/users/${id}`,
  });
};

export const validateEmail = (email) => {
  return $.ajax({
    method: "GET",
    url: `/api/users/0`,
    data: {
      user: { email }
    }
  });
};
