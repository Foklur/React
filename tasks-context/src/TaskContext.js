import React, { createContext, useReducer, useContext } from 'react';

const TaskContext = createContext();

const initialState = {
    tasks: [],
    nextId: 1,
};

function taskReducer(state, action) {
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
            throw new Error('Unknown action type');
    }
}

export function TaskProvider({ children }) {
    const [state, dispatch] = useReducer(taskReducer, initialState);

    return (
        <TaskContext.Provider value={{ state, dispatch }}>
            {children}
        </TaskContext.Provider>
    );
}

export function useTasks() {
    const context = useContext(TaskContext);
    if (!context) {
        throw new Error('useTasks must be used within a TaskProvider');
    }
    return context;
}
