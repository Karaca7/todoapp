import express from "express";
import TodoModdel from "../Model/Todo.js";
const router = express.Router();

router.get("/:id", async (req, res) => {
  let todoId = req.params.id;
  let todo = await TodoModdel.findById(todoId);
  res.json(todo);
});

export default router;
