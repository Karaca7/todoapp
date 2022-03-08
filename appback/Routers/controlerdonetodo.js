import express from "express";
import TodoModdel from "../Model/Todo.js";
const router = express.Router();

router.get("/", async (req, res) => {
  //all todos will be brought

  let data = await TodoModdel.find({ isDone: false });
  res.json(data);
});

export default router;
