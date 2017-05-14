export const RECEIVE_PLEDGE = "RECEIVE_PLEDGE";

export const receivePledge = pledge => {
  return {
    type: RECEIVE_PLEDGE,
    pledge
  };
};
