import express from "express";
import TodoModdel from "../Model/Todo.js";
const router = express.Router();

router.post("/:id", async (req, res) => {
  let status = { value: 200 };
  let id = String(req.params.id);
  let data = await TodoModdel.findById({ _id: id })
    .exec()
    .catch((err) => {
      console.log("document  yok");
      status.value = 404;
    });
  data.isDone = true;
  data.save();

  //console.log(data);

  res.json(data);
});

export default router;
