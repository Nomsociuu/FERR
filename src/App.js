import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./reducers/trendingStore";
import HomePage from "./home/HomePage";
import Trending from "./components/trending/Trending";
import LatestMovies from "./components/latest/latestMovie";
import TrendingCRUD from "./components/trending/TrendingCRUD";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/trendingCRUD" element={<TrendingCRUD />} />
        </Routes>
      </Router>
    </Provider>
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

export default App;
