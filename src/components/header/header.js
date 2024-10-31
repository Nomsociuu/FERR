import React, { useState, useEffect } from "react";
import "./header.css";

const Header = () => {
  const [Mobile, setMobile] = useState(false);
  const [searchBoxVisible, setSearchBoxVisible] = useState(false);
  const [searchText, setSearchText] = useState("");

  // State to hold all movie data
  const [movies, setMovies] = useState([]);

  // Fetch data from db.json
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://my-json-server.typicode.com/nomsociuu/FERR/db");
        const data = await response.json();
        // Combine all movie categories into one array
        const allMovies = [
          ...data.homeData,
          ...data.upcome,
          ...data.latest,
          ...data.trending
        ];
        setMovies(allMovies);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // Filtering movies based on search input
  const filteredMovies = movies.filter(movie => 
    movie.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <>
      <header>
        <div className="container flexSB">
          <nav className="flexSB">
            <div className="logo">
              <img src="./images/logo.png" alt="" />
            </div>
            <ul className={Mobile ? "navMenu-list" : "flexSB"} onClick={() => setMobile(false)}>
              <li><a href="/FERR/">Home</a></li>
              <li><a href="/FERR/">Series</a></li>
              <li><a href="/FERR/">Movies</a></li>
              <li><a href="/FERR/">Pages</a></li>
              <li><a href="/FERR/">Pricing</a></li>
              <li><a href="/trendingCRUD">TrendingCRUD</a></li>
            </ul>
            <button className="toggle" onClick={() => setMobile(!Mobile)}>
              {Mobile ? <i className="fa fa-times"></i> : <i className="fa fa-bars"></i>}
            </button>
          </nav>

          <div className="account flexSB">
            {/* Search bar placed to the left of buttons */}
            {searchBoxVisible && (
              <div className="search-container">
                <input 
                  type="text" 
                  placeholder="Search movies..." 
                  value={searchText} 
                  onChange={(e) => setSearchText(e.target.value)}
                />
                {searchText && (
                  <div className="movie-list">
                    {filteredMovies.map((movie, index) => (
                      <div key={index} className="movie-item">
                        <img src={movie.cover} alt={movie.name} className="movie-cover" />
                        <span>{movie.name}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
            
            <i className="fa fa-search" onClick={() => setSearchBoxVisible(!searchBoxVisible)}></i>
            <i className="fas fa-bell"></i>
            <i className="fas fa-user"></i>
            <button>Subscribe Now</button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
