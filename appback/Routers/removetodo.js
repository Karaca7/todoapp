import express from "express";
import TodoModdel from "../Model/Todo.js";
// import multer from "multer";
const router = express.Router();

router.post("/:id", async (req, res) => {
  let status = { value: 200 };
  let id = req.params.id;
  //   console.log(id);
  await TodoModdel.findByIdAndDelete({ _id: id });
  // .exec()
  // .catch((err) => {
  //   console.log("document  yok");
  //   status.value = 404;
  // });

  res.json(status);
});

export default router;
