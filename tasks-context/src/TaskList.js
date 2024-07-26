import React, { useState } from 'react';
import Task from './Task';
import { useTasks } from './TaskContext';

function TaskList() {
    const { state, dispatch } = useTasks();
    const [taskText, setTaskText] = useState('');

    const handleAddTask = () => {
        dispatch({ type: 'add', text: taskText });
        setTaskText('');
    };

    return (
        <div>
            <h1>Tasks</h1>
            <input
                type="text"
                value={taskText}
                onChange={(e) => setTaskText(e.target.value)}
            />
            <button onClick={handleAddTask}>Add Task</button>
            <ul>
                {state.tasks.map(task => (
                    <Task key={task.id} task={task} />
                ))}
            </ul>
        </div>
    );
}

export default TaskList;
