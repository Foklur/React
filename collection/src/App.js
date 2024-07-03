import './App.css';
import PicturesLayout from './components/PicturesLayout';
import Picture from './components/Picture';
import PicturesList from './components/PicturesList';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/Home"

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="pictures" element={<PicturesLayout />}>
            <Route index element={<PicturesList />} />
            <Route path=":id" element={<Picture />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
