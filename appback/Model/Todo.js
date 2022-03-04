import mongoose from "mongoose";

mongoose.connect("mongodb://localhost/database1");

const TodoSchema = new mongoose.Schema({
  tododata: {
    type: String,
    min: 1,
    max: 100,
    required: true, // ı will  fix
  },
  weight: { type: Number, max: 3, min: 1, required: true }, //,

  todotype: { type: String, required: true }, //

  nowdate: {
    type: Date,
    required: false, // ı will  fix
  },
  lastdate: {
    type: Date,
    required: false, // ı will  fix
  },
  todoimg: { type: String },
  isDone: { type: Boolean, default: false },
});

const TodoModdel = mongoose.model("Todo", TodoSchema);
export default TodoModdel;

//-kolon bilgileri. todo(100 chart) ,weight (düşük-orta-yüksek),date, tamamlandı,img

//tododata  weight todotype nowdate  lastdate todoimg:

/*

  nowdate: {
    type: Date,
    required: false, // ı will  fix
  },

  lastdate: {
    type: Date,
    required: false, // ı will  fix
  },
  todoimg: { type: String },
*/
