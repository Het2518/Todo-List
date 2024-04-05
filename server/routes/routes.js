import express from "express";
import {addTodos} from "../Controller/todo-controller.js";

const router = express.Router();

router.post("/todos", addTodos)

export default router