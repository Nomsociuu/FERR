// App.js

import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./home/HomePage";
import Trending from "./components/trending/Trending";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/trending" element={<Trending />} />
        <Route path='/singlepage/:id' component={Trailer} exact />
      </Routes>
    </Router>
  );
}

export default App;
