const {
  Login,
  SignUp,
  PaymentForPost,
} = require("../controllers/parentController");
const router = require("express").Router();
router.post("/login", Login);
router.post("/signup", SignUp);
router.post("/payment", PaymentForPost);

const parentsAPIRouter = router;
module.exports = parentsAPIRouter;
