export const RECEIVE_DROPDOWN = "RECEIVE_DROPDOWN";

export const receiveDropdown = (dropdown) => {
  return {
    type: RECEIVE_DROPDOWN,
    dropdown,
  };
};
