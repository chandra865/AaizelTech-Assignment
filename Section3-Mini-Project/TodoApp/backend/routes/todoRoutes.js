import express from "express";
import { getTodos, addTodo, deleteTodo, toggleTodo } from "../controllers/todoController.js";

const router = express.Router();

router.get("/", getTodos);
router.post("/add", addTodo);
router.delete("/delete/:id", deleteTodo);
router.patch("/toggle/:id", toggleTodo);

export default router;
