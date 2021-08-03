import React from 'react';
import "./search-bar.scss";

const SearchBar = (props) => {
    return (  
        <div className="searchOuterWRapper searchActive">
                    <div className="searchInnerWrapper">
                    <div className="searchBar">
                        <input type="text" placeholder="Search" autoFocus />
                        <div className="typeSelector">
                            <select name="" id="">
                                <option value="">All</option>
                                <option value="">Movies</option>
                                <option value="">Series</option>
                            </select>
                        </div>
                    </div>
                    </div>
                </div>
    );
}
 
export default SearchBar;