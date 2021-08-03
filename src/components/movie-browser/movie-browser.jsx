import React from "react";
import Movie from "../movie/movie";
import "./movie-browser.scss";
import InfiniteScroll from "react-infinite-scroller";

const MovieBrowser = ({ movies, loadMore, canLoadMore }) => {
  return (
    <InfiniteScroll
      pageStart={0}
      loadMore={loadMore}
      hasMore={canLoadMore}
      threshold={250}
      loader={<div></div>}
    >
      <div className="itemsBrowser">
        {movies?.map((movie) => (
          <Movie key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </InfiniteScroll>
  );
};

export default MovieBrowser;
