const {
  Login,
  SignUp,
  PaymentForPost,
  GetTutor,
} = require("../controllers/parentController");
const router = require("express").Router();
router.post("/login", Login);
router.post("/signup", SignUp);
router.post("/payment", PaymentForPost);
router.get("/getTutor", GetTutor);

const parentsAPIRouter = router;
module.exports = parentsAPIRouter;
