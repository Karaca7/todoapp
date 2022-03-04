import express, { json } from "express";
const app = express();

app.get("/getalltodo", (req, res) => {
  //all todos will be brought
  res.send("all todo object list");
});

//Todo :  database bağlanacak ve gelen istekler get ,post ve put olacak.
app.post("/todoadd/:todo/:weight/:type", (req, res) => {
  // ı will image
  let data = {
    todo: req.params.todo,
    weight: req.params.weight,
    type: req.params.type,
  };
  res.json(data);
});
//buna ihtiyaç var details yada düzenlemek için
app.get("/gettodo/:id", (req, res) => {
  res.json({ "todo id": req.params.id });
});

// oluşturulan ilan yeniden düzenlene bilir mi ?
app.put("/todoadd/:todo/:weight/:type");

app.listen(5500, () => {
  console.log("server is runing");
});
