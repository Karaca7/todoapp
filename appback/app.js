import express from "express";
import multer from "multer";
import cors from "cors";
import bodyParser from "body-parser";

import TodoModdel from "./Model/Todo.js";

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

app.get("/getalltodo", async (req, res) => {
  //all todos will be brought
  let data = await TodoModdel.find({});
  res.json(data);
});

app.post("/removetodo/:id", async (req, res) => {
  let status = { value: 200 };
  let id = String(req.params.id);
  await TodoModdel.findByIdAndRemove({ _id: id })
    .exec()
    .catch((err) => {
      console.log("document  yok");
      status.value = 404;
    });

  res.json(status);
});

app.post("/donetodo/:id", async (req, res) => {
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

  console.log(data);

  res.json(data);
});

//Todo :  database bağlanacak ve gelen istekler get ,post ve put olacak.

const filestroageengine = multer.diskStorage({
  destination: (req, file, cursor) => {
    cursor(null, "./media");
  },
  filename: (req, file, cursor) => {
    cursor(null, Date.now() + "--" + file.originalname);
  },
});
const upload = multer({ storage: filestroageengine });

app.post("/addtodos", upload.single("media"), async (req, res) => {
  try {
    timage = req.file.filename;
  } catch {
    timage = null;
  }

  let todo = await TodoModdel.create({
    tododata: req.body.tododata,
    weight: req.body.weight,
    todotype: req.body.todotype,
    nowdate: req.body.nowdate,
    lastdate: req.body.lastdate,
    isdone: req.body.isdone,
    timage: timage,
  });
  await todo.save();

  res.json({ status: 200 });
});

app.listen(5500, () => {
  console.log("server is runing");
});
