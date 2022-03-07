import express from "express";
import multer from "multer";
import cors from "cors";
import bodyParser from "body-parser";

import TodoModdel from "./Model/Todo.js";

const app = express();

app.use("/media", express.static("media"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

app.get("/isdonetodo", async (req, res) => {
  //all todos will be brought

  let data = await TodoModdel.find({ isDone: false });
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

app.get("/gettodo/:id", async (req, res) => {
  let todoId = req.params.id;
  let todo = await TodoModdel.findById(todoId);
  res.json(todo);
});

app.post("/puttodo", upload.single("media"), async (req, res) => {
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

app.get("/getalltodo", async (req, res) => {
  let alltodo = await TodoModdel.find({});

  res.json(alltodo);
});

app.listen(5500, () => {
  console.log("server is runing");
});
