import { Options } from "sequelize";

export const config = {
  username: "postgres",
  password: "v3ry-53cr3t",
  database: "postgres",
  host: "127.0.0.1",
  dialect: "postgres",
  operatorsAliases: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
} as Options;
