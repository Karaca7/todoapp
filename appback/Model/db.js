import { Sequelize, Model, DataTypes } from "sequelize";

const user = "postgres";
const host = "localhost";
const database = "jsdemo";
const password = "1453";
const port = "5432";

const sequelize = new Sequelize(database, user, password, {
  host,
  port,
  dialect: "postgres",
  logging: false,
});

export { sequelize };
