const {
    GetClass, CreateTutor, getTutor
  } = require("../controllers/tutorController");
  

const router = require("express").Router();
router.get("/getClass", GetClass);
router.post("/getTutor", getTutor);
router.post("/createTutor", CreateTutor);

const tutorAPIRouter = router;
module.exports = tutorAPIRouter;
  