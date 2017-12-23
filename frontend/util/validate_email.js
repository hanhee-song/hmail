export const parseEmail = (email) => {
  const split = email.split("@");
  if (split[1] === "@hmail.com" || split.length === 1) {
    return split[0];
  } else {
    return null;
  }
};

export const fullEmail = (email) => {
  return parseEmail(email) + '@hmail.com';
};
