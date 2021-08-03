import React, { useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const PosterPreviewer = ({ source, width = "220px", height = "320px" }) => {
  const [isLoading, setIsLoading] = useState(true);

  function onLoad() {
    setIsLoading(false);
  }

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
        src={source}
        style={{ display: isLoading ? "none" : "block" }}
        onLoad={onLoad}
        className="poster"
      />
    </>
  );
};

export default PosterPreviewer;
