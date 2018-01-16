export const sendEmail = (email) => {
  return $.ajax({
    method: "POST",
    url: "/api/emails",
    data: { email },
  });
};

export const fetchEmails = () => {
  return $.ajax({
    method: "GET",
    url: "/api/emails",
  });
};

export const fetchEmail = (id) => {
  return $.ajax({
    method: "GET",
    url: `/api/emails/${id}`
  });
};
