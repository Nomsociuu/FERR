// Trending.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTrending } from '../../services/trendingServices';

function Trending() {
  const dispatch = useDispatch();
  const { trending, error } = useSelector((state) => state.trending);

  useEffect(() => {
    dispatch(fetchTrending());
  }, [dispatch]);

  if (error) {
    return <div>Error fetching trending data: {error.message}</div>;
  }

  if (trending.length === 0) {
    return <div>No trending items available.</div>;
  }

  return (
    <div className="container my-5">
      <h2 className="text-center my-5">Trending Movies</h2>
      <div className="row">
        {trending.map((item) => (
          <div key={item.id} className="col-md-4 mb-4">
            <div className="card">
              <img src={item.cover} className="card-img-top" alt={item.name} />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.desc}</p>
                <p><strong>Rating:</strong> {item.rating}</p>
                <p><strong>Time:</strong> {item.time}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Trending;
