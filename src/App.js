import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './reducers/trendingStore';
import HomePage from './home/HomePage';
import Trending from './components/trending/Trending';
import TrendingCRUD from './components/trending/TrendingCRUD';
import Trailer from './components/watch/Trailer';
import LatestMoviesCarousel from './components/latest/latestMovie'; // Adjust the path as needed

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/trendingCRUD" element={<TrendingCRUD />} />
          <Route path="/singlepage/:id" element={<Trailer />} />
          
          {/* New route for LatestMoviesCarousel */}
          <Route path="/latest-movies" element={<LatestMoviesCarousel />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
