import React, { useRef, useState } from 'react';
const TasksList = () => {
    const taskRef = useRef(null);
    const dateRef = useRef(null);

    const [tasks, setTasks] = useState([]);

    const handleAddTask = (e) => {
        e.preventDefault();

        const newTask = {
            id: tasks.length + 1,
            task: taskRef.current.value,
            date: dateRef.current.value,
            complete: false
        }

        setTasks([...tasks, newTask]);
        taskRef.current.value = '';
        dateRef.current.value = '';

    }

    const handleDeleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    const handleComplete = (id) => {
        setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
    };
    return (
        <>
            <h1>Your Tasks List</h1>
            <form className='form-style' onSubmit={handleAddTask}>
                <div>
                    <label>Task:</label>
                    <input placeholder='Task' ref={taskRef} type='text' required />
                </div>
                <div>
                    <label>Date:</label>
                    <input placeholder='Date' ref={dateRef} type='date' required />
                </div>
                <button type='submit'>Add Task</button>
            </form>

            <div className='task-list'>
                {tasks.map((task) => (
                    <div key={task.id} className='task-card'>
                        <input
                            type='checkbox'
                            checked={task.completed}
                            onChange={() => handleComplete(task.id)}
                        />
                        <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                            {task.task} - {task.date}
                        </span>
                        <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
                    </div>
                ))}
            </div>
        </>
    )
}

export default TasksList;