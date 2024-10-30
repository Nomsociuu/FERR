// App.js

import 'bootstrap/dist/css/bootstrap.min.css';// Ensure FontAwesome is imported for icons
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './reducers/trendingStore';
import Home from './components/homes/Home';
import Trending from './components/trending/Trending';
import TrendingCRUD from './components/trending/TrendingCRUD';
import Header from './components/header/header';
import Footer from './components/footer/footer';

import Trailer from "./components/watch/Trailer";


function App() {
  return (
    <Provider store={store}>
      <Router>
        {/* Header is outside Routes so it appears on all pages */}
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/trendingCRUD" element={<TrendingCRUD />} />
        </Routes>
        {/* Footer is also outside Routes for global use */}
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
