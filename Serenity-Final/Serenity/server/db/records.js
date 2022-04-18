import { Query } from "./index";

const all = async () => Query("select * from records");
const one = async (id) => Query("select * from records WHERE id = ?", [id]);
const insert = (id, mood) =>
  Query("insert into records(userid, mood) values(?,?)", [id, mood]);

export default {
  all,
  one,
  insert,
};
