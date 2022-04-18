import * as express from "express";
const router = express.Router();

import db from "../db";

// REST API
router.get("/:id?", async (req, res) => {
  try {
    const id = req.params.id;

    if (id) {
      const users = await db.serenity.one(id);
      res.json(users);
    } else {
      const users = await db.serenity.all();
      res.json(users);
    }
  } catch (error) {
    console.log(error);
  }
});

// Create
router.post("/", async (req, res) => {
  try {
    const body = req.body;

    const dbRes = await db.serenity.insert(
      body.name,
      body.email,
      body.password
    );
    res.status(200).json(dbRes);
  } catch (error) {
    console.log(error);
  }
});

// Delete
router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;

    const dbRes = await db.serenity.destroy(id);

    res.status(200).json(dbRes);
  } catch (error) {
    console.log(error);
  }
});

// Update
router.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const content = req.body.content;

    const dbRes = await db.serenity.update(id, content);

    res.status(200).json(dbRes);
  } catch (error) {
    console.log(error);
  }
});

export default router;
