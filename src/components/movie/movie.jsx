import React from "react";
import PosterPreviewer from "../poster-previewer/poster-previewer";
import "./movie.scss";

const Movie = () => {
  return (
    <div className="itemWRapper">
      {/* <img
        src="https://m.media-amazon.com/images/M/MV5BMTQ3NjExNjY4N15BMl5BanBnXkFtZTcwNTczODkwNQ@@._V1_SX300.jpg"
        alt=""
        className="poster"
      /> */}
      <PosterPreviewer source="https://m.media-amazon.com/images/M/MV5BMTQ3NjExNjY4N15BMl5BanBnXkFtZTcwNTczODkwNQ@@._V1_SX300.jpg" />
      <div className="metaData">
        <div className="title">Movie Title</div>
        <div className="type">Movie</div>
      </div>
      <div className="itemViewer">
      <PosterPreviewer source="https://m.media-amazon.com/images/M/MV5BMTQ3NjExNjY4N15BMl5BanBnXkFtZTcwNTczODkwNQ@@._V1_SX300.jpg" width="360" height="420" />
        <div className="movieData">
          <div className="title">Title</div>
          <div className="yearText">Release Year: 2021</div>
          <div className="directorText">Director: John Doe</div>
          <div className="ratingText">Rating: 8.7</div>
        </div>
      </div>
    </div>
  );
};

export default Movie;
