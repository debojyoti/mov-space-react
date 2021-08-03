/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useState } from "react";
import Header from "../../components/header/header";
import MovieBrowser from "../../components/movie-browser/movie-browser";
import SearchBar from "../../components/search-bar/search-bar";
import { debounce } from "lodash";
import "./home-page.scss";
import { HttpCalls } from "../../http-calls";

const HomePage = (props) => {
  const [searchParams, setSearchParams] = useState({});
  const [isSearchIng, setIsSearchIng] = useState(false);
  const [showError, setShowError] = useState(null);
  const [movies, setMovies] = useState([]);
  const [currentPaginationIndex, setCurrentPaginationIndex] = useState(1);
  const [maxPaginationPageCount, setmaxPaginationPageCount] = useState(1);

  const _clearResults = () => {
    setShowError(null);
    setIsSearchIng(false);
    setMovies([]);
    setSearchParams({});
  };

  const _triggerNewSearch = (searchParams) => {
    //   console.log('object :>> ', object);
    setShowError(null);
    setIsSearchIng(true);
    setSearchParams(searchParams);
  };

  const _initiateSearch = async () => {
    if (searchParams.s?.length) {
        if (searchParams.s?.length < 3) {
            setShowError('Please enter few more charecters');
        } else {
            try {
                setCurrentPaginationIndex(1);
                const {Search, totalResults} = await HttpCalls.makeSearchCall(searchParams)
                setMovies(Search);
                setmaxPaginationPageCount(Math.ceil(totalResults/10))
            } catch (error) {
                
            }
        }
    }
    setIsSearchIng(false);
  };

const _loadMore = async () => {
    try {
        const {Search} = await HttpCalls.makeSearchCall({...searchParams, page: currentPaginationIndex+1});
        setCurrentPaginationIndex(currentPaginationIndex+1);
        setMovies([...movies, ...Search]);
    } catch (error) {
        
    }
}

const _canLoadMore = () => {
    return (currentPaginationIndex < maxPaginationPageCount);
}

  useEffect(() => {
    _initiateSearch();
  }, [searchParams]);

  const _renderActiveView = () => {
    if (showError) {
        return (
            <div className="searchPrompt">
              <p>{showError}</p>
            </div>
          );
    }
    else if (isSearchIng) {
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
      return <MovieBrowser 
        movies={movies}
        canLoadMore={_canLoadMore()}
        loadMore={_loadMore}
      />;
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
