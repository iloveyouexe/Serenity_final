import * as express from "express";
const router = express.Router();

import db from "../db";

// REST API
router.get("/:id?", async (req, res) => {
  try {
    const id = req.params.id;

    if (id) {
      const records = await db.records.one(id);
      res.json(records);
    } else {
      const records = await db.records.all();
      res.json(records);
    }
  } catch (error) {
    console.log(error);
  }
});

// Create
router.post("/", async (req, res) => {
  try {
    const body = req.body;

    const dbRes = await db.records.insert(body.userid, body.mood);
    res.status(200).json(dbRes);
  } catch (error) {
    console.log(error);
  }
});

export default router;
