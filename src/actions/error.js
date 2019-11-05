export const setError = (data = { error: '' }) => {
  return ({
    type: 'ERROR',
    message: data.error,
  });
};

export default { setError };