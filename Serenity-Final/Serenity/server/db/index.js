import * as mysql from "mysql";
import serenity from "./serenity";
import records from "./records";

export const Connection = mysql.createConnection({
  host: "127.0.0.1",
  port: "3306",
  user: "Hunter",
  password: "password",
  database: "serenity",
});

export const Query = (query, values) => {
  return new Promise((resolve, reject) => {
    Connection.query(query, values, (err, results) => {
      if (err) throw err;
      resolve(results);
    });
  });
};

export default {
  serenity,
  records,
};
