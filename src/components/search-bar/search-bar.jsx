/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import "./search-bar.scss";
import {DebounceInput} from 'react-debounce-input';


const SearchBar = (props) => {
  const { clearResults, triggerNewSearch } = props;

  const [searchText, setSearchText] = useState("");
  const [searchType, setSearchType] = useState("all");

  useEffect(() => {
    const trimmedSearchedText = searchText.trim();
    if (!trimmedSearchedText?.length) {
      clearResults();
    } else {
      const searchParams = {
        s: searchText,
      };
      if (searchType !== "all") {
        searchParams.type = searchType;
      }
      triggerNewSearch(searchParams);
    }
  }, [searchText, searchType]);

  return (
    <div
      className={`searchOuterWRapper ${searchText?.length && "searchActive"}`}
    >
      <div className="searchInnerWrapper">
        <div className="searchBar">
          <DebounceInput
            className={searchText?.length && "hasText"}
            type="text"
            placeholder="Search"
            debounceTimeout={500}
            autoFocus
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <div className="typeSelector">
            <select
              name="typeSelector"
              id="typeSelector"
              onChange={(e) => setSearchType(e.target.value)}
            >
              <option value="all">All</option>
              <option value="movie">Movies</option>
              <option value="series">Series</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
