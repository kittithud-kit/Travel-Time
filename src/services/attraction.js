import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const attractionApi = createApi({
  reducerPath: "attractionApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://www.melivecode.com/api/" }),
  endpoints: (builder) => ({
    getAllAttractions: builder.query({
      query: () => `th/attractions`,
    }),
    getAttractionsByID: builder.query({
      query: (id) => `th/attractions/${id}`,
    }),
  }),
});

export const { useGetAllAttractionsQuery, useGetAttractionsByIDQuery } =
  attractionApi;
