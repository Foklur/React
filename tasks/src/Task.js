import React from 'react';

function Task({ task, dispatch }) {
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