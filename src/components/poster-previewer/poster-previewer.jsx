import React, { useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const PosterPreviewer = ({ source, width = "220px", height = "320px" }) => {
  const [isLoading, setIsLoading] = useState(true);

  function onLoad() {
    setIsLoading(false);
  }

  const _isValidURL = (url) => {
    const expression =
      /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
    const regex = new RegExp(expression);
    if (url.match(regex)) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <>
      {isLoading && (
        <SkeletonTheme highlightColor="#ffffff" color="#f5f5f5">
          <Skeleton width={width} height={height} />
        </SkeletonTheme>
      )}
      <img
        alt="ad-img"
        width={300}
        src={
          _isValidURL(source)
            ? source
            : "https://png.pngtree.com/png-vector/20190316/ourmid/pngtree-movie-projector-icon-set-of-great-flat-icons-with-style-long-s-png-image_848559.jpg"
        }
        style={{ display: isLoading ? "none" : "block" }}
        onLoad={onLoad}
        className="poster"
      />
    </>
  );
};

export default PosterPreviewer;
