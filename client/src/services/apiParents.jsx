import instance from "../utils/axiosCustomize";

const postLoginParents = (username, password) => {};
const postRegisterParents = (username, password, CCCD) => {};

const postPayment = () => {
  return instance.post("http://localhost:8080/api/parent/payment");
};

export { postPayment, postLoginParents, postRegisterParents };
