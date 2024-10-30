// App.js
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './reducers/trendingStore';
import Home from './components/Home';
import Trending from './components/trending/Trending';
import TrendingCRUD from './components/trending/TrendingCRUD';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/trendingCRUD" element={<TrendingCRUD />} /> {/* New Route */}
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
