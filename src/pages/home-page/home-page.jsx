import React from 'react';
import Header from '../../components/header/header';
import MovieBrowser from '../../components/movie-browser/movie-browser';
import SearchBar from '../../components/search-bar/search-bar';
import "./home-page.scss";

const HomePage = () => {
    return (  
        <>
            <div className="homePageWrapper">
                <Header />
                <SearchBar />
                {/* <div className="searchPrompt">
                    <p>Search your favourite titles</p>
                </div> */}
                {/* <div className="searchInProgress">
                    <img src={require("../../assets/images/mov-search.gif")} alt="" />
                    <h3>Search results are on the way</h3>
                </div> */}
                <MovieBrowser />
                </div>
        </>
    );
}
 
export default HomePage;