export const render = (users, responseMessage = "Success", responseCode = 200) => {
  return {
    responseMessage,
    responseCode,
    data: users,
  };
};

export const renderDetail = (users, responseMessage = "Success", responseCode = 200) => {
  return {
    responseMessage,
    responseCode,
    data: users,
  };
};

export const renderDeleteResponse = (status, message, data = null) => {
  return { status, message, data };
};
