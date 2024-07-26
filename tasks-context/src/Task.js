import React from 'react';
import { useTasks } from './TaskContext';

function Task({ task }) {
    const { dispatch } = useTasks();

    const handleDelete = () => {
        dispatch({ type: 'delete', id: task.id });
    };

    return (
        <li>
            {task.text}
            <button onClick={handleDelete}>Delete</button>
        </li>
    );
}

export default Task;
