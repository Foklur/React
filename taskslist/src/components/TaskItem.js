import React from 'react';

const TaskItem = ({ task, onEdit, onDelete }) => {
    const handleEdit = () => {
        onEdit(task.id);
    };

    const handleDelete = () => {
        onDelete(task.id);
    };

    return (
        <li className="task-item">
            <span>{task.task}</span>
            <div>
                <button onClick={handleEdit}>Edit</button>
                <button onClick={handleDelete}>Delete</button>
            </div>
        </li>
    );
};

export default TaskItem;
