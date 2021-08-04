/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { HttpCalls } from "../../http-calls";
import PosterPreviewer from "../poster-previewer/poster-previewer";
import "./movie.scss";

const Movie = ({ movie }) => {
  const [isExpaned, setIsExpanded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [additonalMovieData, setAdditonalMovieData] = useState(null);

  const _loadMovieData = async () => {
    if (additonalMovieData) {
      setIsLoading(false);
    } else {
      try {
        const response = await HttpCalls.getMovieDetails(movie.imdbID);
        setAdditonalMovieData(response);
      } catch (error) {
        setIsLoading(false);
      }
    }
  };

  useEffect(() => {
    if (isExpaned) {
      _loadMovieData();
    }
  }, [isExpaned]);

  useEffect(() => {
    if (additonalMovieData) {
      setIsLoading(false);
    }
  }, [additonalMovieData]);

  return (
    <div
      className="itemWRapper"
      onMouseEnter={(e) => setIsExpanded(true)}
      onMouseLeave={(e) => setIsExpanded(false)}
      key={movie.key}
    >
      <PosterPreviewer source={movie?.Poster} />
      <div className="metaData">
        <div className="title">{movie?.Title}</div>
        <div className="type">{movie?.Type?.toUpperCase()}</div>
      </div>

      {isExpaned && (
        <>
          <div className="itemViewer">
            <PosterPreviewer source={movie?.Poster} width="360" height="420" />
            <div className="movieData">
              <div className="title">{movie?.Title}</div>
              {isLoading ? (
                <div className="skeltonWrapper">
                  <SkeletonTheme highlightColor="#ffffff" color="#f5f5f5">
                    <Skeleton width={"200px"} height={"5px"} />
                    <Skeleton width={"200px"} height={"5px"} />
                    <Skeleton width={"200px"} height={"5px"} />
                  </SkeletonTheme>
                </div>
              ) : (
                <>
                  {additonalMovieData && (
                    <>
                      <div className="yearText">
                        Release Year: {additonalMovieData.Year}
                      </div>
                      <div className="directorText">
                        Director: {additonalMovieData.Director}
                      </div>
                      <div className="ratingText">
                        Rating: {additonalMovieData.imdbRating}
                      </div>
                    </>
                  )}
                </>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Movie;
