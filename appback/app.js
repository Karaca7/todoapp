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

//Todo :  database bağlanacak ve gelen istekler get ,post ve put olacak.

import Alltodo from "./Routers/alltodo.js";
import ControlerIsDoneTodo from "./Routers/controlerdonetodo.js";
import AddTodo from "./Routers/addtodos.js";
import UpdateTodo from "./Routers/updatetodo.js";
import RemoveTodo from "./Routers/removetodo.js";
import DoneTodo from "./Routers/donetodo.js";
import GetTodo from "./Routers/gettodo.js";

app.use("/getalltodo", Alltodo);
app.use("/isdonetodo", ControlerIsDoneTodo);
app.use("/addtodos", AddTodo);
app.use("/puttodo", UpdateTodo);
app.use("/removetodo", RemoveTodo);
app.use("/donetodo/", DoneTodo);
app.use("/gettodo/", GetTodo);

app.listen(5500, () => {
  console.log("server is runing");
});
