import Todo from "../models/Todo.js";

export const addTodos = async (req, res) => {
    try {
        const newTodo = await Todo.create({
            text: req.body.text,
            createdAt: Date.now()
        })
        await newTodo.save();
        return res.status(200).json(newTodo);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}