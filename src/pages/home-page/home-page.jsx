import React, { useEffect, useState } from "react";
import Header from "../../components/header/header";
import MovieBrowser from "../../components/movie-browser/movie-browser";
import SearchBar from "../../components/search-bar/search-bar";
import "./home-page.scss";

const HomePage = (props) => {
  const [searchParams, setSearchParams] = useState({});
  const [isSearchIng, setIsSearchIng] = useState(false);
  const [movies, setMovies] = useState([]);
  const [currentPaginationIndex, setCurrentPaginationIndex] = useState(0);
  const [maxPaginationPageCount, SetmaxPaginationPageCount] = useState(0);

  const _clearResults = () => {
    setIsSearchIng(false);
    setMovies([]);
    setSearchParams({});
  };

  const _triggerNewSearch = (searchParams) => {
    setIsSearchIng(true);
    _processSearch(searchParams);
  };

  const _processSearch = async (searchParams) => {};

  useEffect(() => {}, [searchParams]);

  const _renderActiveView = () => {
    if (isSearchIng) {
      return (
        <div className="searchInProgress">
          <img src={require("../../assets/images/mov-search.gif")} alt="" />
          <h3>Search results are on the way</h3>
        </div>
      );
    } else if (!isSearchIng && !Object.keys(searchParams).length) {
      return (
        <div className="searchPrompt">
          <p>Search your favourite titles</p>
        </div>
      );
    } else if (!isSearchIng && movies.length) {
      return <MovieBrowser />;
    }
  };

  return (
    <>
      <div className="homePageWrapper">
        <Header />
        <SearchBar
          clearResults={_clearResults}
          triggerNewSearch={_triggerNewSearch}
        />
        {_renderActiveView()}
      </div>
    </>
  );
};

export default HomePage;
