import instance from "../utils/axiosCustomize";

const postLoginParents = (username, password) => {};
const postRegisterParents = (username, password, CCCD) => {};

const postPayment = (money) => {
  const data = {
    money: money,
  };

  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  return instance.post("http://localhost:8080/api/parent/payment", data, config);
};

export { postPayment, postLoginParents, postRegisterParents };
