import express from "express";
import multer from "multer";
import TodoModdel from "./Model/Todo.js";

const app = express();

app.get("/getalltodo", async (req, res) => {
  //all todos will be brought
  let data = await TodoModdel.find({});
  res.json(data);
});

//Todo :  database bağlanacak ve gelen istekler get ,post ve put olacak.

app.post("/addtodo/:todo/:weight/:type", (req, res) => {
  // ı will image
  console.log("post");

  let data = {
    todo: req.params.todo,
    weight: req.params.weight,
    type: req.params.type,
  };
  console.log(data);
  res.json({ type: 200 });
});
//buna ihtiyaç var details yada düzenlemek için
app.get("/gettodo/:id", (req, res) => {
  res.json({ "todo id": req.params.id });
});

// oluşturulan ilan yeniden düzenlene bilir mi ?

app.put("/puttodo/:todo/:weight/:type", (req, res) => {
  console.log("put");
  let data = {
    todo: req.params.todo,
    weight: req.params.weight,
    type: req.params.type,
  };
  console.log(data);
  res.json({ type: 200 });
});

const filestroageengine = multer.diskStorage({
  destination: (req, file, cursor) => {
    cursor(null, "./media");
  },
  filename: (req, file, cursor) => {
    cursor(null, Date.now() + "--" + file.originalname);
  },
});
const upload = multer({ storage: filestroageengine });

//tododata  weight todotype nowdate  lastdate todoimg:

app.post(
  "/addtodo2/:todo/:weight/:todotype/:nowdate/:lastdate/:isdone/",
  upload.single("media"),
  async (req, res) => {
    //
    console.log(req.params.todo);

    // console.log(data);
    console.log("post");
    console.log(req.params.nowdate);
    console.log(req.params.lastdate);
    let todo = await TodoModdel.create({
      tododata: req.params.todo,
      weight: req.params.weight,
      todotype: req.params.todotype,
      nowdate: new Date(1449092965474),
      lastdate: new Date(1449092965745),
      todoimg: req.file.filename,
      isDone: req.params.isdone,
    });
    await todo.save();

    res.json({ type: 200 });
  }
);

app.listen(5500, () => {
  console.log("server is runing");
});
