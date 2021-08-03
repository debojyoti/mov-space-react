import React, { useState } from "react";
import PosterPreviewer from "../poster-previewer/poster-previewer";
import "./movie.scss";

const Movie = ({movie}) => {
  const [isExpaned, setIsExpanded] = useState(false);

  return (
    <div className="itemWRapper" onMouseEnter={e => setIsExpanded(true)} onMouseLeave={e => setIsExpanded(false)}>
      <PosterPreviewer source={movie.Poster} />
      <div className="metaData">
        <div className="title">Movie Title</div>
        <div className="type">Movie</div>
      </div>
      {
        isExpaned && (
          <>
          <div className="itemViewer">
          <PosterPreviewer source={movie.Poster} width="360" height="420" />
            <div className="movieData">
              <div className="title">Title</div>
              <div className="yearText">Release Year: 2021</div>
              <div className="directorText">Director: John Doe</div>
              <div className="ratingText">Rating: 8.7</div>
            </div>
          </div>
          </>
        )
      }
    </div>
  );
};

export default Movie;
