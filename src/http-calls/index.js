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
    console.log('queryStrings :>> ', queryStrings);
    return queryStrings;
  },
  makeSearchCall: async (searchParams) => {
    const { data } = await axios.get(
      `http://www.omdbapi.com/${HttpCalls.structureQueryParams({
        apiKey: "92087764",
        ...searchParams,
      })}`
    );
    return data;
  },
  getMovieDetails: async (omdbId) => {
    const { data } = await axios.get(
      `http://www.omdbapi.com/${HttpCalls.structureQueryParams({
        apiKey: "92087764",
        i: omdbId,
      })}`
    );
    return data;
  },
};
