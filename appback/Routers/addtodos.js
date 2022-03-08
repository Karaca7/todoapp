import express from "express";
import TodoModdel from "../Model/Todo.js";
import multer from "multer";
const router = express.Router();

const filestroageengine = multer.diskStorage({
  destination: (req, file, cursor) => {
    cursor(null, "./media");
  },
  filename: (req, file, cursor) => {
    cursor(null, Date.now() + "--" + file.originalname);
  },
});
const upload = multer({ storage: filestroageengine });

router.post("/", upload.single("media"), async (req, res) => {
  let todo = await TodoModdel.create({
    tododata: req.body.tododata,
    weight: req.body.weight,
    todotype: req.body.todotype,
    nowdate: req.body.nowdate,
    lastdate: req.body.lastdate,
    isdone: req.body.isdone,
  });
  try {
    let timage = req.file.filename;
    todo.todoimg = `http://localhost:5500/media/${timage}`;
  } catch {
    let timage = null;
    todo.todoimg = timage;
    console.log("bura2");
  }
  await todo.save();
  res.json({ status: 200 });
});

export default router;
