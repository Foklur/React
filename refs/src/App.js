
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddNewPicture from './components/AddNewPicture';
import Menu from './components/Menu';
import TasksList from './components/TaskList';

function App() {
  return (
    <Router>
      <div className="App">

        <header>
          <Menu />
        </header>
        <Routes>
          <Route path="newPicture" element={<AddNewPicture />} />
          <Route path="listTasks" element={<TasksList />} />
          <Route />
        </Routes>
      </div>
    </Router >
  );
}

export default App;
