import express from "express";
import TodoModdel from "../Model/Todo.js";
const router = express.Router();

router.get("/", async (req, res) => {
  let alltodo = await TodoModdel.find({});

  res.json(alltodo);
});

export default router;
