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

router.post("", upload.single("media"), async (req, res) => {
  let status = { value: 200 };
  let idtodo = req.body.todoidasdsad;

  let data = await TodoModdel.findById({ _id: idtodo })
    .exec()
    .catch((err) => {
      console.log("document  yok");
      status.value = 404;
    });
  data.tododata = req.body.tododata[0];
  data.weight = req.body.weight;
  data.nowdate = req.body.nowdate;
  data.lastdate = req.body.lastdate;
  data.todotype = req.body.todotype;

  try {
    let timage = req.file.filename;
    console.log(typeof timage);
    let reqimg = `http://localhost:5500/media/${timage}`;

    data.todoimg = reqimg;
  } catch {
    let timage = null;

    data.todoimg = timage;
  }

  await data.save();
  //console.log(req.body);
  res.json({ status: 200 });
});

export default router;
