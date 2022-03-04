import { Sequelize } from "sequelize";

import { sequelize } from "./db.js";

const Todo = sequelize.define("todo", {
  todo_id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },

  tododata: {
    type: Sequelize.STRING(100),
    allowNull: false,
  },
  weight: {
    type: Sequelize.INTEGER(3),
    allowNull: false,
  },
  isDone: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
    allowNull: true,
  },
  createdate: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  finsheddate: {
    type: Sequelize.DATE,

    allowNull: false,
  },
  todoimg: {
    type: Sequelize.TEXT,
    allowNull: true,
  },
});

module.exports = Todo;
//-kolon bilgileri. todo(100 chart) ,weight (düşük-orta-yüksek),date, tamamlandı,img
