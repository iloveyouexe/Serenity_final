import * as express from "express";
import usersRouter from "./users";
import recordsRouter from "./records";

const router = express.Router();

// localhost:3000/api/users/
router.use("/users", usersRouter);
router.use("/records", recordsRouter);

export default router;