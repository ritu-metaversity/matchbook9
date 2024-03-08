import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const betfairApi = createApi({
  reducerPath: "betfairApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://oddsapi.247idhub.com",
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");
      headers.set("Authorization", `Bearer ${token}`);
      return headers;
    },
  }),
  endpoints: (build) => ({
    OddsData: build.query({
      query: (args) => {
        return {
          url: `/betfair_api/fancy/${args}`,
          method: "GET",
        }
      },
    })
  }),
});

export const {useOddsDataQuery} = betfairApi;
