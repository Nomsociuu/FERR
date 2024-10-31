import React from "react";
import { Link } from "react-router-dom";

const HomeCard = (props) => {
  const { id, cover, name, rating, time, desc, starring, genres, tags, video } = props.item;

  return (
    <div className="box duckpart">
      <div className="coverImage">
        <img src={cover} alt={name} />
      </div>
      <div className="content flex">
        <div className="details">
          <h1>{name}</h1>
          <div className="rating flex">
            <div className="rate">
              <i className="fas fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-half"></i>
            </div>
            <label>{rating}(Imdb)</label>
            <span>GP</span>
            <label>{time}</label>
          </div>
          <p>{desc}</p>
          <div className="cast">
            <h4>
              <span>Starring </span>
              {starring}
            </h4>
            <h4>
              <span>Genres </span>
              {genres}
            </h4>
            <h4>
              <span>Tags </span>
              {tags}
            </h4>
          </div>
          <button className="primary-btn">
            <i className="fas fa-play"></i> PLAY NOW
          </button>
        </div>
        <div className="palyButton row">
          <Link to={`/singlepage/${id}`}>
            <button>
              <div className="img">
                <img src="./images/play-button.png" alt="Play Button" />
                <img src="./images/play.png" className="change" alt="Play" />
              </div>
              WATCH TRAILER
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
