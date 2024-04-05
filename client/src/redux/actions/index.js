import axios from "axios";
import {ADD_NEW_TODOS} from "./type";

const API_URL = "http://localhost:8000";

export const addNewTodos = (todoText) => async (dispatch) => {
    try {
        const res = await axios.post(`${API_URL}/todos`, {text: todoText});
        dispatch({type: ADD_NEW_TODOS, payload: res.data});
    } catch (error) {
        console.log("Error Message:- ", error.message);
    }
};