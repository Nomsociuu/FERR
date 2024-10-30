
// App.js
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Trending from './components/trending/Trending';
import Trailer from './components/watch/Watch';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trending" element={<Trending />} />
        <Route path='/singlepage/:id' component={Trailer} exact />
      </Routes>
    </Router>
  );
}

export default App;
