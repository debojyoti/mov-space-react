import React from "react";
import ImageDirectory from "../../image-directory";

const SearchInProgress = ({
  showText = true,
  text = "Search results are on the way",
}) => {
  return (
    <div className="searchInProgress">
      <img
        src={ImageDirectory.searchImage}
        alt=""
      />
      {showText && <h3>{text}</h3>}
    </div>
  );
};

export default SearchInProgress;
