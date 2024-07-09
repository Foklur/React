import React, { useState } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [editingTaskId, setEditingTaskId] = useState(null);

  const addTask = (task) => {
    const newTask = { id: Date.now(), task: task.task };
    setTasks([...tasks, newTask]);
  };

  const editTask = (id) => {
    setEditingTaskId(id);
  };

  const updateTask = (data) => {
    const updatedTasks = tasks.map((task) =>
      task.id === editingTaskId ? { ...task, task: data.task } : task
    );
    setTasks(updatedTasks);
    setEditingTaskId(null);
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
    if (editingTaskId === id) {
      setEditingTaskId(null);
    }
  };

  return (
    <div className="App">
      <div className="container">
        <h1>Task List</h1>
        <TaskForm onSubmit={editingTaskId !== null ? updateTask : addTask} initialValues={editingTaskId !== null ? tasks.find(task => task.id === editingTaskId) : null} />
        <TaskList tasks={tasks} onEdit={editTask} onDelete={deleteTask} />
      </div>
    </div>
  );
}

export default App;