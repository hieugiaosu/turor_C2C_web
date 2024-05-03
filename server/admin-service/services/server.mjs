// server.js (or any filename you prefer)
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
const app = express();

// Enable CORS
app.use(cors());

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Your getMessages function
import { getMessages } from "../services/data.mjs";

// Define your API endpoint
app.get("/admin/inbox/getMessages", (req, res) => {
  const { name } = req.query;
  const messages = getMessages().find(user => user.name === name);
  if (messages) {
    res.json(messages);
  } else {
    res.status(404).json({ error: "Messages not found for the given id" });
  }
});

// Route to get user list
app.get("/admin/inbox/getUserList", (req, res) => {
  const data = getMessages();
  const userList = data.map(({ id, name, photo, isActive, messages }) => ({ id, name, photo, isActive, messages }));
  res.json(userList);
});

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});