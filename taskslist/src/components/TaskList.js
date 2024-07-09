import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onEdit, onDelete }) => {
    return (
        <div className="task-list">
            <h2>Task List</h2>
            {tasks.length === 0 ? (
                <p>No tasks</p>
            ) : (
                <ul>
                    {tasks.map((task) => (
                        <TaskItem key={task.id} task={task} onEdit={onEdit} onDelete={onDelete} />
                    ))}
                </ul>
            )}
        </div>
    );
};

export default TaskList;