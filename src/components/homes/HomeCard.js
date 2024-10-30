import React from "react";
import { Link } from "react-router-dom";
import playButton from './images/play-button.png'; // adjust path if different
import playIcon from './images/play.png'; // adjust path if different
import './HomeCard.css'; // Assuming there's a CSS file for styling

const HomeCard = ({ item: { id, cover, name, rating, time, desc, starring, genres, tags } }) => {
  return (
    <div className="box">
      <div className="coverImage">
        <img src={cover} alt={name} />
      </div>
      <div className="content flex">
        <div className="details row">
          <h1>{name}</h1>
          <div className="rating flex">
            <div className="rate">
              <i className="fas fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-half"></i>
            </div>
            <label>{rating} (IMDB)</label>
            <span>GP</span>
            <label>{time}</label>
          </div>
          <p>{desc}</p>
          <div className="cast">
            <h4>
              <span>Starring: </span>
              {starring}
            </h4>
            <h4>
              <span>Genres: </span>
              {genres}
            </h4>
            <h4>
              <span>Tags: </span>
              {tags}
            </h4>
          </div>
          <button className="primary-btn">
            <i className="fas fa-play"></i> PLAY NOW
          </button>
        </div>
        <div className="playButton row">
          <Link to={`/singlepage/${id}`}>
            <button>
              <div className="img">
                <img src={playButton} alt="Play button" />
                <img src={playIcon} className="change" alt="Play icon" />
              </div>
              WATCH TRAILER
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomeCard;
