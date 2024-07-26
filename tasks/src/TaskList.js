import React, { useReducer, useState } from 'react';
import Task from './Task';

const initialState = {
    tasks: [],
    nextId: 1,
};

function reducer(state, action) {
    switch (action.type) {
        case 'add':
            return {
                tasks: [...state.tasks, { id: state.nextId, text: action.text }],
                nextId: state.nextId + 1,
            };
        case 'delete':
            return {
                tasks: state.tasks.filter(task => task.id !== action.id),
                nextId: state.nextId,
            };
        default:
            throw new Error('Unknown type');
    }
}

function TaskList() {
    const [state, dispatch] = useReducer(reducer, initialState);
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
                    <Task key={task.id} task={task} dispatch={dispatch} />
                ))}
            </ul>
        </div>
    );
}

export default TaskList;