export const request = ({ type, payload }) => ({
  type: type,
  payload: payload,
});

export const success = ({ type, success }) => ({
  type: type,
  payload: success,
});

export const failure = ({ type, error, payload }) => ({
  type: type,
  payload: error,
  payload: payload,
});
