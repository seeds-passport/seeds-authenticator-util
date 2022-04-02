const fetch = require("node-fetch");

const callApi = () => async (url, data) => {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(data),
  });
  return await response.json();
};

module.exports = callApi;
