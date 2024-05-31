import express from "express";
import { getUser, postUser } from "../controllers/userController.js";
import { getAllTask, getTask, postTask, putTask, deleteTask } from "../controllers/taskController.js";

const router = express.Router();

router.post("/", postUser);
router.get("/", getUser);

router.get("/task", getAllTask);
router.get("/task/:id", getTask);
router.post("/task", postTask);
router.put("/task/:id", putTask);
router.delete("/task/:id", deleteTask);

export default router;