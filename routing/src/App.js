import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './component/Menu';
import Biography from './component/Biography'
import MostPopularPainting from './component/MostPopularPicture';
import Gallery from './component/GalaryPictures';
import RandomNumber from './component/RandomNumber';
import Stoplight from './component/Stoplight';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <Menu />
        </header>

        <RandomNumber min={10} max={20} />
        <Stoplight startLight='red' />
        <Routes>
          <Route path="/biography" element={<Biography />} />
          <Route path="/mostPopularPicture" element={<MostPopularPainting />} />
          <Route path="/galaryPictures" element={<Gallery />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;