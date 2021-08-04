/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { DebounceInput } from "react-debounce-input";
import ImageDirectory from "../../image-directory";
import "./search-bar.scss";

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

  const _clearSearchText = () => {
    setSearchText("");
  };

  return (
    <div
      className={`searchOuterWRapper ${searchText?.length && "searchActive"}`}
      style={{ backgroundImage: `url(${ImageDirectory.searchBanner})` }}
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
          {searchText.length? (
            <div className="clearBtnWrapper" onClick={_clearSearchText}>
              <button className="clearBtn">x</button>
            </div>
          ): <></>}
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
