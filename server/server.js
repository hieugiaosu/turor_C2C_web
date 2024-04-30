const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();

// const adminAPIRouter = require("./admin-service/routes");
// const tutorAPIRouter = require("./tutor-service/routes");
const parentsAPIRouter = require("./parents-service/routes");

// App setup
const app = express();
const port = process.env.PORT || 8080;
const corsOptions = {
  origin: process.env.FRONTEND_URL,
  credentials: true,
};

// Middlewares
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());

// Every route should start with /api
// app.use('/api', adminAPIRouter);
// app.use('/api', tutorAPIRouter);
app.use("/api/parent", parentsAPIRouter);

// Error handlers
app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(500).send("Server đang bị lỗi. Vui lòng thử lại sau!");
});

// Listen for requests
app.listen(port, () => {
  console.log(`Server running on ${port}...`);
});
