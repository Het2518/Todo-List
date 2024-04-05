import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {addNewTodos} from "../redux/actions";

const TodoForm = () => {
    const [todoText, setTodoText] = useState('');
    const dispatch = useDispatch();

    const onFormSubmit = (e) => {
        e.preventDefault();
        dispatch(addNewTodos(todoText));
        setTodoText(''); // Clear the input field after submitting
    }

    const onInputChange = (e) => {
        setTodoText(e.target.value);
    }

    return (
        <form onSubmit={onFormSubmit}
              className='flex justify-center items-center w-full border-none outline-0 border-b-2 border-gray-300 bg-gray-100 p-3 sm:p-5 rounded-md mt-3'
        >
            <input
                type="text"
                value={todoText}
                onChange={onInputChange}
                placeholder="Enter your todo"
                className='w-full px-2 sm:px-3 py-1 sm:py-2 text-gray-700 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-gray-500 rounded-md'
            />
        </form>
    );
};

export default TodoForm;
