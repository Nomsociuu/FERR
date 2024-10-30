import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLatest } from '../../services/latestServices';
import { Carousel } from 'react-bootstrap';
import "../latest/latestMovie.css";

function LatestMoviesCarousel() {
    const dispatch = useDispatch();
    const { latestMovies, loading, error } = useSelector((state) => state);
  
    useEffect(() => {
      dispatch(fetchLatest());
    }, [dispatch]);
  
    // Group movies into chunks of three for each slide
    const movieChunks = [];
    for (let i = 0; i < latestMovies.length; i += 3) {
      movieChunks.push(latestMovies.slice(i, i + 3));
    }
  
    return (
      <div className="latest-movies-carousel">
        <h2 className="carousel-title">
          Latest Movies <span className="view-all">View All</span>
        </h2>
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        <Carousel interval={null}>
          {movieChunks.map((chunk, index) => (
            <Carousel.Item key={index}>
              <div className="movie-cards">
                {chunk.map((movie) => (
                  <div key={movie.id} className="movie-card">
                    <img
                      className="movie-cover"
                      src={movie.cover}
                      alt={movie.name}
                    />
                    <div className="movie-info">
                      <h3 className="movie-title">{movie.name}</h3>
                      <p className="movie-time">{movie.time}</p>
                      <button className="play-button">
                        <i className='play-icon fa fa-play'></i> Play Now
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    );
  }
  
  export default LatestMoviesCarousel;
