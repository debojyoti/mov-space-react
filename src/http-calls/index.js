import axios from "axios";

export const HttpCalls = {
  structureQueryParams: (params) => {
    let queryStrings = "?";
    const keys = Object.keys(params);
    keys.forEach((key, index) => {
      queryStrings += key + "=" + params[key];
      if (params[keys[index + 1]]) {
        queryStrings += "&";
      }
    });
    console.log("queryStrings :>> ", queryStrings);
    return queryStrings;
  },
  makeSearchCall: async (searchParams) => {
    const { data } = await axios.get(
      `${process.env.REACT_APP_OMDB_BASE_URL}/${HttpCalls.structureQueryParams({
        apiKey: process.env.REACT_APP_OMDB_KEY,
        ...searchParams,
      })}`
    );
    return data;
  },
  getMovieDetails: async (imdbID) => {
    const { data } = await axios.get(
      `${process.env.REACT_APP_OMDB_BASE_URL}/${HttpCalls.structureQueryParams({
        apiKey: process.env.REACT_APP_OMDB_KEY,
        i: imdbID,
      })}`
    );
    return data;
  },
};
