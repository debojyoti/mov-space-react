import React from "react";
import Movie from "../movie/movie";
import "./movie-browser.scss";
import InfiniteScroll from "react-infinite-scroller";
import SearchInProgress from "../search-progress/search-progress";

const MovieBrowser = ({ movies, loadMore, canLoadMore }) => {
  return (
    <InfiniteScroll
      pageStart={0}
      loadMore={loadMore}
      hasMore={canLoadMore}
      threshold={250}
      loader={<SearchInProgress showText={false} key={0} />}
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
