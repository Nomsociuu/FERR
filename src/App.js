
// App.js
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Trending from './components/trending/Trending';
import LatestMovies from './components/latest/latestMovie';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trending" element={<Trending />} />
      </Routes>
    </Router>
  );
}


function App1() {
  return (
    <div className="App">
      <h1>Movie App</h1>
      <LatestMovies />
    </div>
  );
}

export default App1;